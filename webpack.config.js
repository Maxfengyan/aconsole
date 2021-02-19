const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // devtool: 'inline-source-map',
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'aconsole.min.js',
    library: 'Aconsole',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "test",
      filename: "test.html",
      template: "./src/test.html",
      scriptLoading: "blocking",
      minify: false
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
