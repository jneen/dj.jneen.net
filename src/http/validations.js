const joi = require('joi');

const objectID = joi.string().length(24);
const userName = joi.string()
  .min(3).max(32)
  .regex(/^[^\s\n]+$/);
const userEmail = joi.string().email();
const userPassword = joi.string().min(6);

const newStylePagination = joi.object({
  page: joi.object({
    offset: joi.number().min(0),
    limit: joi.number().min(0),
  }),
});
const oldStylePagination = joi.object({
  page: joi.number().min(0),
  limit: joi.number().min(0),
});
const pagination = [
  newStylePagination,
  oldStylePagination,
];

// Validations for authentication routes:

const register = exports.register = joi.object({
  body: joi.object({
    email: userEmail.required(),
    username: userName.required(),
    password: userPassword.required(),
  }),
});

const login = exports.login = joi.object({
  query: joi.object({
    session: joi.string().valid('token', 'cookie').default('token'),
  }),
  body: joi.object({
    email: userEmail.required(),
    password: joi.string().required(),
  }),
});

const requestPasswordReset = exports.requestPasswordReset = joi.object({
  body: joi.object({
    email: userEmail.required(),
  }),
});

const passwordReset = exports.passwordReset = joi.object({
  params: joi.object({
    reset: joi.string().required(),
  }),
  body: joi.object({
    password: userPassword.required(),
  }),
});

// Validations for booth routes:

const skipBooth = exports.skipBooth = joi.object({
  body: joi.object({
    reason: joi.string().allow(''),
    userID: objectID,
    remove: joi.bool(),
  }).and('userID', 'reason'),
});

const replaceBooth = exports.replaceBooth = joi.object({
  body: joi.object({
    userID: objectID.required(),
  }),
});

const favorite = exports.favorite = joi.object({
  body: joi.object({
    playlistID: objectID.required(),
    historyID: objectID.required(),
  }),
});

const getRoomHistory = exports.getRoomHistory = joi.object({
  query: pagination,
});

// Validations for chat routes:

const deleteChatByUser = exports.deleteChatByUser = joi.object({
  params: joi.object({
    id: objectID.required(),
  }),
});

const deleteChatMessage = exports.deleteChatMessage = joi.object({
  params: joi.object({
    id: joi.string().required(),
  }),
});

// Validations for MOTD routes:

const setMotd = exports.setMotd = joi.object({
  body: joi.object({
    motd: joi.string().required(),
  }),
});

// Validations for playlist routes:

const playlistParams = joi.object({
  id: objectID.required(),
});

const playlistItemParams = joi.object({
  id: objectID.required(),
  itemID: objectID.required(),
});

const createPlaylist = exports.createPlaylist = joi.object({
  body: joi.object({
    name: joi.string().required(),
  }),
});

const getPlaylist = exports.getPlaylist = joi.object({
  params: playlistParams,
});

const deletePlaylist = exports.deletePlaylist = joi.object({
  params: playlistParams,
});

const updatePlaylist = exports.updatePlaylist = joi.object({
  params: playlistParams,
  body: joi.object({
    name: joi.string(),
    shared: joi.bool(),
    description: joi.string(),
  }),
});

const renamePlaylist = exports.renamePlaylist = joi.object({
  params: playlistParams,
  body: joi.object({
    name: joi.string().required(),
  }),
});

const sharePlaylist = exports.sharePlaylist = joi.object({
  params: playlistParams,
  body: joi.object({
    shared: joi.bool().required(),
  }),
});

const getPlaylistItems = exports.getPlaylistItems = joi.object({
  params: playlistParams,
  query: pagination,
});

const addPlaylistItems = exports.addPlaylistItems = joi.object({
  params: playlistParams,
  body: joi.object({
    items: joi.array().required(),
  }),
});

const removePlaylistItems = exports.removePlaylistItems = joi.object({
  params: playlistParams,
  body: joi.object({
    items: joi.array().required(),
  }),
});

const movePlaylistItems = exports.movePlaylistItems = joi.object({
  params: playlistParams,
  body: joi.object({
    items: joi.array().required(),
    after: [
      objectID, // Insert after ID
      joi.number().valid(-1), // Old-style prepend (use at=start instead)
    ],
    at: joi.string().valid('start', 'end'),
  }).xor('after', 'at'),
});

const shufflePlaylistItems = exports.shufflePlaylistItems = joi.object({
  params: playlistParams,
});

const getPlaylistItem = exports.getPlaylistItem = joi.object({
  params: playlistItemParams,
});

const updatePlaylistItem = exports.updatePlaylistItem = joi.object({
  params: playlistItemParams,
  body: joi.object({
    artist: joi.string(),
    title: joi.string(),
    start: joi.number().min(0),
    end: joi.number().min(0),
  }),
});

const removePlaylistItem = exports.removePlaylistItem = joi.object({
  params: playlistItemParams,
});

// Validations for user routes:

const userParams = joi.object({
  id: objectID.required(),
});

const getUser = exports.getUser = joi.object({
  params: userParams,
});

const muteUser = exports.muteUser = joi.object({
  params: userParams,
  body: joi.object({
    time: joi.number().min(0).required(),
  }),
});

const unmuteUser = exports.unmuteUser = joi.object({
  params: userParams,
});

const addUserRole = exports.addUserRole = joi.object({
  params: joi.object({
    id: objectID.required(),
    role: joi.string().required(),
  }),
});

const removeUserRole = exports.removeUserRole = joi.object({
  params: joi.object({
    id: objectID.required(),
    role: joi.string().required(),
  }),
});

const setUserName = exports.setUserName = joi.object({
  params: userParams,
  body: joi.object({
    username: userName,
  }),
});

const setUserAvatar = exports.setUserAvatar = joi.object({
  params: userParams,
  body: joi.object({
    avatar: joi.string(),
  }),
});

const setUserStatus = exports.setUserStatus = joi.object({
  params: userParams,
  body: joi.object({
    status: joi.number(),
  }),
});

const getUserHistory = exports.getUserHistory = joi.object({
  params: userParams,
  query: pagination,
});

// Validations for Waitlist routes:

const joinWaitlist = exports.joinWaitlist = joi.object({
  body: joi.object({
    userID: objectID.required(),
  }),
});

const moveWaitlist = exports.moveWaitlist = joi.object({
  body: joi.object({
    userID: objectID.required(),
    position: joi.number().min(0).required(),
  }),
});

const lockWaitlist = exports.lockWaitlist = joi.object({
  body: joi.object({
    lock: joi.bool().required(),
  }),
});
