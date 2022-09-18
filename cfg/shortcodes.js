const path = require('path');

const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt) {
  let metadata = await Image(path.join(__dirname, '../src', src), {
    widths: [800],
    formats: ['avif', 'webp', 'jpeg'],
    urlPath: '/images/',
    outputDir: './out/images',
    filenameFormat: function (id, src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}.${format}`;
    }
  });

  let imageAttributes = {
    alt
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = (config) => {
  config.addNunjucksAsyncShortcode('image', imageShortcode);
  config.addLiquidShortcode('image', imageShortcode);
};
