const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  entry: path.resolve(__dirname, "src/bangits-platform-cms-config"),
  output: {
    filename: "bangits-platform-cms-config.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "sourcemap",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "src/index.ejs",
      templateParameters: {
        isLocal: env && env.isLocal === "true"
      }
    }),
    new CleanWebpackPlugin()
  ],
  externals: ["single-spa", /^@bangits-platform\/.+$/]
});
