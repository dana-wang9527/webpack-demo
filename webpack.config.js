const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm//to access built-in plugins
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  ...base,
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
