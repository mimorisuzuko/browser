const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserify = require('gulp-browserify');
const pug = require('gulp-pug');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');

const src = 'src';
const dst = 'dst';

gulp.task('sass', () => {
	gulp.src(path.join(src, '*.scss'))
		.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
		.pipe(sass.sync())
		.pipe(autoprefixer())
		.pipe(gulp.dest(path.join(dst, '/')));
});

gulp.task('scripts', () => {
	gulp.src(path.join(src, 'index.js'))
		.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
		.pipe(browserify({
			insertGlobals: true,
			debug: !gulp.env.production
		}))
		.pipe(gulp.dest(path.join(dst, '/')));
});

gulp.task('pug', () => {
	gulp.src(path.join(src, '*.pug'))
		.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
		.pipe(pug({}))
		.pipe(gulp.dest(path.join(dst, '/')));
});

gulp.task('watch', () => {
	gulp.run('sass');
	gulp.run('scripts');
	gulp.run('pug');
	gulp.watch(path.join(src, '*.scss'), ['sass']);
	gulp.watch(path.join(src, 'index.js'), ['scripts']);
	gulp.watch(path.join(dst, '/'), ['pug']);
});

gulp.task('default', ['sass', 'scripts', 'pug']);