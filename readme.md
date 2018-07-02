## ES6 Tutorial: 5-webpack

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

This branch tracks [here](https://ccoenraets.github.io/es6-tutorial/setup-webpack/).

On the command line, make sure you are in the es6-tutorial directory and install the babel-loader and webpack modules:

`npm install babel-loader webpack --save-dev`

Open package.json in your code editor, and add a webpack script (right after the babel script). The scripts section should now look like this:

`"scripts": {
    "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server",
    "webpack": "webpack"
},`


In the es6-tutorial directory, create a new file named `webpack.config.js` defined as follows:

`var path = require("path");`

`var webpack = require('webpack');`

`module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
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
 };`
