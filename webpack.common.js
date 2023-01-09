const path = require('path');

module.exports = {
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".js", '.jsx', '.ts', '.tsx']
	},
	performance: {
		// Webpack hints message when the generated JavaScript File is larger than preset.
		hints: false,
	},
	entry: path.resolve(__dirname, 'src/main.tsx'),
	output: {
		filename: 'main.js',
		// set public path
		// browser router base on this path to get resource,
		// if you don't set it, multi-level will not find the specified resource.
		publicPath: '/',
		path: path.resolve(__dirname, 'dist'),
	},
	// module will add loaders to transfer various assets.
	module: {
		rules: [
			{
				test: /\.s?[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					// Inject CSS into the DOM.
					"style-loader",
					// Translates CSS into CommonJS
					// interprets @import and url() like import/require() and will resolve them.
					'css-loader',
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.tsx?$/i,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(j|t)sx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|svg)$/i,
				// raw-loader, url-loader, file-loader is deprecated in webpack5.
				// please use asset, or appear bug of loading css picture.
				// more info please check: https://webpack.js.org/guides/asset-modules/
				type: 'asset/resource'
			}
		],
	},
	plugins: [
	],
};