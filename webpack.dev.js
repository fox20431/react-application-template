const { merge } = require('webpack-merge');
const path = require('path');
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
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
      }
});