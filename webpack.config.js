var path = require('path')
var webpack = require('webpack')

module.exports = {
    watch: true,
    entry: {
        'index': 'index',
        'vendor': ['react', 'refer', 'classnames', 'whatwg-fetch']
    },
    output: {
        path: path.join(__dirname, 'public/js/dest'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                stage: 0,
                optional: ["runtime"]
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", '.es6'],
        root: path.join(__dirname, '/public/js/src/'),
        modulesDirectories: ["node_modules"],
        alias: {
            refer: path.join(path.dirname(__dirname), 'refer'),
            'refer-logger': path.join(path.dirname(__dirname), 'refer-logger'),
            //'react-props': path.join(__dirname, 'public/js/src/lib', 'react-props')
        }
    }
}
