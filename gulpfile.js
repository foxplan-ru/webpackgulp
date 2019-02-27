/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

/**
 * Plugins
 */

global.plugin = {
	gulp: require( 'gulp' ),
	clean: require('gulp-clean'),
	browserSync: require('browser-sync'),
	pug: require('gulp-pug'),
	prettify: require('gulp-prettify'),
	sourcemaps: require('gulp-sourcemaps'),
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	gcmq: require('gulp-group-css-media-queries'),
	cleanCSS: require('gulp-clean-css'),
	gulpIf: require('gulp-if'),
	rename: require('gulp-rename'),
	imageMin: require('gulp-imagemin'),
	imageMinJR: require('imagemin-jpeg-recompress'),
	imageMinPQ: require('imagemin-pngquant'),
	favicon: require('gulp-favicons')
};

/**
 * Patch
 */

global.$ = {
	path: {
		dist: './dist',
		src: './src',
		cfg: './gulp'
	}
};

/**
 * Configs
 */

global.$$ = {
	path: {
		dist: {
			html:  $.path.dist,
			style: $.path.dist + '/styles/',
			img:   $.path.dist + '/img/',
			fonts: $.path.dist + '/fonts/'
		},
		src: {
			pug:    $.path.src + '/views/',
			style:  $.path.src + '/styles/',
			img:    $.path.src + '/img/',
			fonts:  $.path.src + '/fonts/'
		},
		clean: $.path.dist,
		tasks: require( $.path.cfg + '/config.js' )
	},

	srv: {
		server: {
			baseDir: $.path.dist
		},
		tunnel: false,
		notify: false,
		port: 80
	}
};

$$.path.tasks.forEach( (taskPath) => {
	require( taskPath )();
});

plugin.gulp.task( 'default', plugin.gulp.series(
	'build',
	'server',
	'watch',
));