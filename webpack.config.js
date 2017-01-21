const webpack = require('webpack');
const libpath = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
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
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}, {
	entry: {
		style: './src/index.scss'
	},
	output: {
		path: libpath.join(__dirname, 'dst'),
		filename: 'index.css'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('index.css')
	]
}];