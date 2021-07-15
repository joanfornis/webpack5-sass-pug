const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { index: './src/index.js', home: './src/home.js'},
  output: {
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: 'src/home.pug'
    }),
  ],
};