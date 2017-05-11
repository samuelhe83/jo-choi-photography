const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index',

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, 'client', 'compiled'),
    publicPath: '/compiled/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [

      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },

      {
        test: /\.styl$/,
        loader: 'style-loader!cssloader!stylus-loader'
      }

    ]
  }
};