const config = Object.assign({}, require('./webpack.config'), {
	devServer: {
		contentBase: 'docs',
		port: 3000,
		host: '0.0.0.0',
		inline: true
	}
});

module.exports = config;