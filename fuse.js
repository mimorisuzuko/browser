const { FuseBox, BabelPlugin, PostCSSPlugin, SassPlugin, CSSPlugin, Sparky, EnvPlugin, UglifyJSPlugin } = require('fuse-box');
const autoprefixer = require('autoprefixer');

const fuse = FuseBox.init({
	homeDir: 'src',
	output: 'docs/$name.js',
	plugins: [
		EnvPlugin({
			NODE_ENV: 'production'
		}),
		BabelPlugin({
			presets: ['es2015', 'react']
		}),
		[
			SassPlugin(),
			PostCSSPlugin({
				plugins: [autoprefixer()]
			}),
			CSSPlugin()
		],
		UglifyJSPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	]
});
const app = fuse.bundle('app').instructions('> index.jsx');

Sparky.task('default', () => {
	fuse.run();
});

Sparky.task('watch', () => {
	fuse.dev({ port: 3000 });
	app.watch().hmr();
	fuse.run();
});
