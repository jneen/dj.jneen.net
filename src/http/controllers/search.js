const props = require('p-props');
const createDebug = require('debug');
const { NotFoundError } = require('../errors');
const toListResponse = require('../utils/toListResponse');

const log = createDebug('uwave:http:search');

const searchAll = exports.searchAll = function searchAll(req) {
  const uw = req.uwave;
  const { user } = req;
  const { query } = req.query;
  const promises = {};

  uw.sources.forEach((source) => {
    promises[source.type] = source.search(user, query)
      .catch((error) => {
        log(error.message);
        // Default to empty search on failure, for now.
        return [];
      });
  });

  return props(promises);
}

const search = exports.search = async function search(req) {
  const uw = req.uwave;
  const { user } = req;
  const sourceName = req.params.source;
  const { query } = req.query;

  const source = uw.source(sourceName);
  if (!source) {
    throw new NotFoundError('Source not found.');
  }

  const results = await source.search(user, query);

  return toListResponse(results, { url: req.fullUrl });
}
