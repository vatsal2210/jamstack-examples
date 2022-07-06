module.exports = (config) => {
  // types of files or assets to pass to "dist"

  config.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
