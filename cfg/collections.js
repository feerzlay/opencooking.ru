const { filterTags } = require('./functions');

module.exports = (config) => {
  config.addCollection('tags', (collection) => {
    const tags = new Set();

    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tags.add(tag));
    });

    return filterTags([...tags]);
  });

  config.addCollection('authors', (collection) => {
    const authors = new Set();

    collection.getAll().forEach((item) => {
      (item.data.authors || []).forEach((author) => authors.add(author));
    });

    return [...authors];
  });

  config.addCollection('authorsRecipes', (collection) => {
    const result = collection.getFilteredByGlob('src/recipes/*.md').reduce((coll, recipe) => {
      if (!recipe.data.authors) {
        return coll;
      }

      recipe.data.authors.forEach((author) => {
        if (!coll[author]) {
          coll[author] = [];
        }
        coll[author].push(recipe);
      });

      return coll;
    }, {});

    return result;
  });
};
