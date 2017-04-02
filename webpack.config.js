const webpack = require('webpack');
const libpath = require('path');
const { optimize: { UglifyJsPlugin } } = webpack;
const dst = 'docs';

module.exports = {
	entry: [
		libpath.join(__dirname, 'src/')
	],
	output: {
		path: libpath.join(__dirname, dst),
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader?presets[]=es2015'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: [
		new UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	]
};