const fs = require('fs');
const path = require('path');

const { compareStrings, filterTags, parseDuration } = require('./functions');

module.exports = (config) => {
  config.addFilter('filterTagList', filterTags);

  config.addFilter('sort', (value) => {
    return value.slice().sort((a, b) => compareStrings(a.data.title, b.data.title));
  });

  config.addFilter('limit', (value, n) => {
    return value.slice(0, n);
  });

  config.addFilter('join', (value) => {
    return value.join(', ');
  });

  config.addFilter('json', (value) => {
    return JSON.stringify(value);
  });

  config.addFilter('duration', (value) => {
    return parseDuration(value);
  });

  config.addFilter('isFileExists', (value) => {
    try {
      return fs.existsSync(path.join(__dirname, '../src', value));
    } catch (error) {
      return false;
    }
  });
};
