const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,

  watch: true,

  entry: {
    app: ['./app/index.jsx']
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: pkg.name + '.[name].js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-0', 'react'] }
      }
    ]
  }
};
