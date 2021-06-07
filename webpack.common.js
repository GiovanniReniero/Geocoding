const path = require ("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require("lodash");

module.exports = {
  // mode: "development",
  entry: "./src/index.js",
  
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
      {
        test: /\.html$/i,
        loader: 'html-loader',
       },
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //  {
        // test: /\.(png|jpe?g|gif)$/i,
        // use: [
          // {
            // loader: "file-loader",
            // options: {
            // esModule: false,
            // name: "[name].[hash].[ext]",
            // outputPath: "imgs"
            // }
          // },
        ],
      }
    
  }
