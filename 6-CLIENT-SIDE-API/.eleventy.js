module.exports = (config) => {
  // types of files or assets to pass to "dist"

  // config.setBrowserSyncConfig({
  //   https: {
  //     key: "/etc/localhost.key",
  //     cert: "/etc/localhost.crt",
  //   },
  // });

  config.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
