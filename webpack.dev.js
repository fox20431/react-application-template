const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// control if and how source maps are generated.
	devtool: 'inline-source-map',
	//  tell webpack to use its built-in optimizations accordingly.
	mode: 'development',
	devServer: {
		port: 3000,
		compress: true,
		// hot swap
		hot: true,
		// make BrowserRouter work
		historyApiFallback: true,
	},
});