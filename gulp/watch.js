/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.gulp.task('html:watch', done => {
		plugin.gulp.watch( $$.path.src.pug + '**/*.pug', plugin.gulp.series('html') );
		done();
	});

	plugin.gulp.task('style:watch', done => {
		plugin.gulp.watch( $$.path.src.style + '**/*.sass', plugin.gulp.series('style') );
		done();
	});

	plugin.gulp.task('images:watch', done => {
		plugin.gulp.watch( [ $$.path.src.img + '**/*.{jpg,jpeg,png,gif,svg}', '!' + $$.path.src.img + 'favicon/*.{jpg,jpeg,png,gif}' ], plugin.gulp.series('images') );
		done();
	});

	plugin.gulp.task('favicons:watch', done => {
		plugin.gulp.watch( $$.path.src.img + "favicon/*.{jpg,jpeg,png,gif}", plugin.gulp.series('favicons') );
		done();
	});

	plugin.gulp.task('fonts:watch', done => {
		plugin.gulp.watch( $$.path.src.fonts + '**/*.{woff,woff2,ttf,eot,svg}', plugin.gulp.series('fonts') );
		done();
	});

	plugin.gulp.task('watch', plugin.gulp.series(
		plugin.gulp.parallel(
			'html:watch',
			'style:watch',
			'images:watch',
			'favicons:watch',
			'fonts:watch'
		)
	));
};