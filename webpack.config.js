const webpack = require('webpack');
const libpath = require('path');

module.exports = {
	entry: libpath.join(__dirname, 'src/'),
	output: {
		path: libpath.join(__dirname, '/dst'),
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['transform-react-jsx']
				}
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [new webpack.optimize.UglifyJsPlugin()]
};