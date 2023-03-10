const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // control if and how source maps are generated.
    devtool: 'inline-source-map',
    //  tell webpack to use its built-in optimizations accordingly.
    watchOptions: {
        ignored: '**/node_modules',
        aggregateTimeout: 200,
        poll: 1000,
    },
});