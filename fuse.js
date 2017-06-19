const { FuseBox, BabelPlugin, PostCSSPlugin, SassPlugin, CSSPlugin } = require('fuse-box');
const autoprefixer = require('autoprefixer');

const fuse = FuseBox.init({
	homeDir: 'src',
	output: 'docs/$name.js',
	plugins: [
		BabelPlugin({
			presets: ['es2015', 'react']
		}),
		[
			SassPlugin(),
			PostCSSPlugin({
				plugins: [autoprefixer()]
			}),
			CSSPlugin()
		]
	]
});

fuse.bundle('app').instructions('> index.jsx');
fuse.run();