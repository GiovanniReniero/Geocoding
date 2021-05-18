const path = require ("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require("lodash");

module.exports = {
  // mode: "development",
  entry: "./src/index.js",
  // output: {
  //   filename: "bundle.[contenthash].js",
  //   path: path.resolve(__dirname, "dist"),
  //   clean: true
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}