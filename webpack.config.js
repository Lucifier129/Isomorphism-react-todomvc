var path = require('path')
var webpack = require('webpack')
module.exports = {
    watch: true,
    entry: {
        'index': 'index',
        'vendor': ['react', 'redux', 'react-redux', 'classnames', 'whatwg-fetch']
    },
    output: {
        path: path.join(__dirname, 'public/js/dest'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?stage=0&optional[]=runtime'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", '.es6'],
        root: path.join(__dirname, '/public/js/src/'),
        modulesDirectories: ["node_modules"]
    }
}
