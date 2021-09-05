const cookie = require('cookie');
const createDebug = require('debug');
const jwt = require('jsonwebtoken');
const randomString = require('random-string');
const got = require('got');
const ms = require('ms');
const {
  HTTPError,
  NotFoundError,
  PermissionError,
  TokenError,
} = require('../errors');
const sendEmail = require('../email');
const beautifyDuplicateKeyError = require('../utils/beautifyDuplicateKeyError');
const toItemResponse = require('../utils/toItemResponse');
const toListResponse = require('../utils/toListResponse');

const log = createDebug('uwave:http:auth');

function seconds(str) {
  return Math.floor(ms(str) / 1000);
}

const getCurrentUser = exports.getCurrentUser = function getCurrentUser(req) {
  return toItemResponse(req.user || {}, {
    url: req.fullUrl,
  });
}

const getAuthStrategies = exports.getAuthStrategies = function getAuthStrategies(req) {
  const { passport } = req.uwaveHttp;

  return toListResponse(
    passport.strategies(),
    { url: req.fullUrl },
  );
}

const refreshSession = exports.refreshSession = async function refreshSession(res, api, user, options) {
  const token = await jwt.sign(
    { id: user.id },
    options.secret,
    { expiresIn: '31d' },
  );

  const socketToken = await api.authRegistry.createAuthToken(user);

  if (options.session === 'cookie') {
    const serialized = cookie.serialize('uwsession', token, {
      httpOnly: true,
      secure: !!options.cookieSecure,
      path: options.cookiePath || '/',
      maxAge: seconds('31 days'),
    });
    res.setHeader('Set-Cookie', serialized);
    return { token: 'cookie', socketToken };
  }

  return { token, socketToken };
}

/**
 * The login controller is called once a user has logged in successfully using Passport;
 * we only have to assign the JWT.
 */
const login = exports.login = async function login(options, req, res) {
  const { user } = req;
  const sessionType = req.query.session === 'cookie' ? 'cookie' : 'token';

  if (await user.isBanned()) {
    throw new PermissionError('You have been banned.');
  }

  const { token, socketToken } = await refreshSession(res, req.uwaveHttp, user, {
    ...options,
    session: sessionType,
  });

  return toItemResponse(user, {
    meta: {
      jwt: sessionType === 'token' ? token : 'cookie',
      socketToken,
    },
  });
}

const socialLoginCallback = exports.socialLoginCallback = async function socialLoginCallback(options, req, res) {
  const { user } = req;

  if (await user.isBanned()) {
    throw new PermissionError('You have been banned.');
  }

  await refreshSession(res, req.uwaveHttp, user, {
    ...options,
    session: 'cookie',
  });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Success</title>
      </head>
      <body>
        You can now close this window.
        <script>close()</script>
      </body>
    </html>
  `);
}

const getSocketToken = exports.getSocketToken = async function getSocketToken(req) {
  const { authRegistry } = req.uwaveHttp;

  const socketToken = await authRegistry.createAuthToken(req.user);
  return toItemResponse({ socketToken }, {
    url: req.fullUrl,
  });
}

async function verifyCaptcha(responseString, options) {
  if (!options.recaptcha) {
    log('ReCaptcha validation is disabled');
    return null;
  }
  if (!responseString) {
    throw new Error('ReCaptcha validation failed. Please try again.');
  }

  const response = await got.post('https://www.google.com/recaptcha/api/siteverify', {
    json: true,
    form: true,
    body: {
      response: responseString,
      secret: options.recaptcha.secret,
    },
  });

  if (!response.body.success) {
    log('recaptcha validation failure', response.body);
    throw new Error('ReCaptcha validation failed. Please try again.');
  }
  return null;
}

const register = exports.register = async function register(options, req) {
  const uw = req.uwave;
  const {
    grecaptcha, email, username, password,
  } = req.body;

  if (/\s/.test(username)) {
    throw new HTTPError(400, 'Usernames can\'t contain spaces.');
  }

  try {
    await verifyCaptcha(grecaptcha, options);

    const user = await uw.createUser({
      email,
      username,
      password,
    });

    return toItemResponse(user);
  } catch (error) {
    throw beautifyDuplicateKeyError(error);
  }
}

const reset = exports.reset = async function reset(options, req) {
  const uw = req.uwave;
  const Authentication = uw.model('Authentication');
  const { email } = req.body;

  const auth = await Authentication.findOne({
    email: email.toLowerCase(),
  });
  if (!auth) {
    throw new NotFoundError('User not found.');
  }

  const token = randomString({ length: 35, special: false });

  await uw.redis.set(`reset:${token}`, auth.user.toString());
  await uw.redis.expire(`reset:${token}`, 24 * 60 * 60);

  await sendEmail(email, {
    mailTransport: options.mailTransport,
    email: options.createPasswordResetEmail({
      token,
      requestUrl: req.fullUrl,
    }),
  });

  return toItemResponse({});
}

const changePassword = exports.changePassword = async function changePassword(req) {
  const uw = req.uwave;
  const resetToken = req.params.reset;
  const { password } = req.body;

  const userId = await uw.redis.get(`reset:${resetToken}`);
  if (!userId) {
    throw new TokenError('That reset token is invalid. Please double-check your reset '
      + 'token or request a new password reset.');
  }

  await uw.users.updatePassword(userId, password);

  await uw.redis.del(`reset:${resetToken}`);

  return toItemResponse({}, {
    meta: {
      message: `Updated password for ${userId}`,
    },
  });
}

const logout = exports.logout = async function logout(options, req, res) {
  const uw = req.uwave;

  uw.publish('user:logout', {
    userID: req.user.id,
  });

  if (req.cookies && req.cookies.uwsession) {
    const serialized = cookie.serialize('uwsession', '', {
      httpOnly: true,
      secure: !!options.cookieSecure,
      path: options.cookiePath || '/',
      maxAge: 0,
    });
    res.setHeader('Set-Cookie', serialized);
  }

  return toItemResponse({});
}

const removeSession = exports.removeSession = async function removeSession() {
  throw new Error('Unimplemented');
}
