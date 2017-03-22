const libpath = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const config = Object.assign({}, require('./webpack.config'), {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		libpath.join(__dirname, 'src/')
	],
	devServer: {
		hot: true,
		contentBase: 'docs',
		port: 3000,
		host: '0.0.0.0',
		inline: true
	}
});

config.plugins.push(new HotModuleReplacementPlugin());

module.exports = config;