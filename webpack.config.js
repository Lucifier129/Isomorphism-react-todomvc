module.exports = {
  cache: true,

  entry: {
    // 'index': ['index/app.js'],
    'todomvc': ['todomvc/app.js']
  },

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      // { test: /\.jsx$/, exclude: /node_modules/, loader: "jsx-loader?harmony"},
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?optional[]=runtime'}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ["", ".js", ".jsx", '.es6'],
    root: __dirname + '/public/js/src',
    modulesDirectories: ["node_modules"]
  }
}