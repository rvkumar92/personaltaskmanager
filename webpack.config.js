var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : './src/TaskManagerApp.js',
    output: { path: __dirname, filename: 'taskManager.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};