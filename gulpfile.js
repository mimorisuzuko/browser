const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const webserver = require('gulp-webserver');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

const src = 'src';
const dst = 'dst/';
const scssPath = path.join(src, '*.scss');
const indexjsxPath = path.join(src, 'index.jsx');
const jsxPath = path.join(src, '*.jsx');
const pugPath = path.join(src, '*.pug');

gulp.task('sass', () => {
	gulp.src(scssPath)
		.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
		.pipe(sass.sync())
		.pipe(autoprefixer())
		.pipe(gulp.dest(dst));
});

gulp.task('jsx', () => {
	process.env.NODE_ENV = 'production';
	browserify(indexjsxPath, { debug: true })
		.transform(babelify, { presets: ['es2015', 'react'] })
		.bundle()
		.on('error', (err) => console.log(`Error : ${err.message}`))
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(dst));
});

gulp.task('pug', () => {
	gulp.src(pugPath)
		.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
		.pipe(pug({}))
		.pipe(gulp.dest(dst));
});

gulp.task('webserver', () => {
	gulp.src(dst)
		.pipe(webserver({
			host: 'localhost',
			port: 6280,
			livereload: false
		}));
});

gulp.task('watch', ['webserver', 'sass', 'jsx', 'pug'], () => {
	gulp.watch(scssPath, ['sass']);
	gulp.watch(jsxPath, ['jsx']);
	gulp.watch(pugPath, ['pug']);
});

gulp.task('default', ['sass', 'js', 'pug']);