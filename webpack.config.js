const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "test",
      filename: "test.html",
      template: './src/test.html'
    }),
  ],
  devServer: {
    contentBase: "./dist",
    openPage: "test.html",
    open: true,
    port: 9000,
    hot: true,
    // hotOnly: true
  }
};
