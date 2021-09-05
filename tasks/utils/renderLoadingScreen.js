/* eslint-disable global-require */
const h = require('react').createElement;
const prerender = require('./prerender');

module.exports = function renderLoadingScreen() {
  const LoadingScreen = require('../../ui/components/LoadingScreen').default;

  return prerender(h(LoadingScreen));
};
