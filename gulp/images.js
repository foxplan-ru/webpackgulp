/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.gulp.task('images', () => {
		return plugin.gulp.src([ $$.path.src.img + '**/*.{jpg,jpeg,png,gif,svg}', '!' + $$.path.src.img + 'favicon/*.{jpg,jpeg,png,gif}' ])
			.pipe( plugin.imageMin([
				plugin.imageMinJR(),
				plugin.imageMinPQ()
			]))
			.pipe( plugin.gulp.dest( $$.path.dist.img ) )
			.on( 'end', plugin.browserSync.reload );
	});
};