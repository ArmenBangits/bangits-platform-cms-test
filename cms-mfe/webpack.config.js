const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  console.log(webpackConfigEnv);
  const defaultConfig = singleSpaDefaults({
    orgName: "bangits-platform-cms",
    projectName: "mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 9001
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
