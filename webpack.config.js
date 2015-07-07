var path = require('path')

module.exports = {
  watch: true,
  entry: {
    'index': ['index/app.js'],
  },
  output: {
    path: path.join(__dirname, 'public/js/dest'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0&optional[]=runtime'}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx", '.es6'],
    root: path.join(__dirname, '/public/js/src'),
    modulesDirectories: ["node_modules"]
  }
}