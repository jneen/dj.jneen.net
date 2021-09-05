const path = require('path');
const defaultFs = require('fs');
const hstream = require('hstream');
const router = require('router');
const serveStatic = require('connect-gzip-static');
const gzip = require('http-gzip-maybe');

function createManifest({ title }) {
  return {
    name: title,
    short_name: title,
    start_url: '.',
    theme_color: '#FF0000',
    background_color: '#151515',
    display: 'standalone',
    icons: [{
      type: 'image/png',
      src: '/icon-white.png',
      sizes: '144x144',
    }],
  };
}

module.exports = function createWebClient(options = {}) {
  const {
    basePath = path.join(__dirname, '../public'),
    fs = defaultFs, // Should only be used by the dev server.
    title = 'üWave',
    ...clientOptions
  } = options;

  const clientRouter = router();
  const manifest = createManifest({ title });

  return clientRouter
    .get('/', (req, res) => {
      res.setHeader('content-type', 'text/html');

      const transform = hstream({
        title,
        '#u-wave-config': JSON.stringify(clientOptions),
      });

      fs.createReadStream(path.join(basePath, 'index.html'), 'utf8')
        .pipe(transform)
        .pipe(gzip(req, res))
        .pipe(res);
    })
    .get('/reset/:key', (req, res) => {
      res.setHeader('content-type', 'text/html');

      const transform = hstream({
        title,
        '#u-wave-config': JSON.stringify({ apiUrl: clientOptions.apiUrl }),
        '#reset-data': req.params.key,
      });

      fs.createReadStream(path.join(basePath, 'password-reset.html'), 'utf8')
        .pipe(transform)
        .pipe(gzip(req, res))
        .pipe(res);
    })
    .get('/manifest.json', (req, res) => {
      res.json(manifest);
    })
    .get('/u-wave-web-config.json', (req, res) => {
      res.json(clientOptions);
    })
    .use(serveStatic(basePath));
}
