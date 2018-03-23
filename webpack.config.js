const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"), 
      path.resolve(__dirname, "src", "page"), 
      path.resolve(__dirname, "src", "game"), 
      path.resolve(__dirname, "src", "card"), 
      "node_modules"
    ],
    extensions: ['.js', '.css', 'html', '*']
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};