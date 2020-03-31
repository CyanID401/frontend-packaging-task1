const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'bin/assets'),
    }
});