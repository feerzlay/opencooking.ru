const collections = require('./cfg/collections');
const filters = require('./cfg/filters');
const plugins = require('./cfg/plugins');
const shortcodes = require('./cfg/shortcodes');
const static = require('./cfg/static');
const transforms = require('./cfg/transforms');

module.exports = (config) => {
  collections(config);
  filters(config);
  plugins(config);
  shortcodes(config);
  static(config);
  transforms(config);

  return {
    templateFormats: ['md', 'njk'],
    pathPrefix: '/',
    dir: {
      input: './src',
      output: './out',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
