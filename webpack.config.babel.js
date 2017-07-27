import { DefinePlugin, optimize } from 'webpack';
import libpath from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const { UglifyJsPlugin } = optimize;
const dst = 'docs';
let { env: { NODE_ENV } } = process;

if (!NODE_ENV) {
	NODE_ENV = 'production';
}

const isProduction = NODE_ENV === 'production';
const presets = ['react'];
const plugins = [
	new CleanWebpackPlugin([dst], {
		root: __dirname,
		verbose: false,
		dry: false,
		exclude: ['index.html']
	}),
	new DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(NODE_ENV)
		}
	})
];

if (isProduction) {
	presets.push('es2015');
	plugins.push(new UglifyJsPlugin({ compress: { warnings: false }, mangle: true }));
}

export default {
	entry: [
		libpath.join(__dirname, 'src/')
	],
	output: {
		path: libpath.join(__dirname, dst),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins
};