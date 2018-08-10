var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/main.js',
        ratefinder: './src/js/ratefinder.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.src$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};