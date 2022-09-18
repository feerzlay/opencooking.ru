const htmlminifier = require('html-minifier');

module.exports = (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.addTransform('htmlminifier', (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) {
        let minified = htmlminifier.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
      return content;
    });
  }
};
