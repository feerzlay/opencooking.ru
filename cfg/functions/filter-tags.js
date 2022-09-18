module.exports = (tags) => {
  return (tags || []).filter((tag) => ['all', 'recipes'].indexOf(tag) === -1);
};
