/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.gulp.task( 'fonts', () => {
		return plugin.gulp.src( $$.path.src.fonts + '**/*.{woff,woff2,ttf,eot,svg}' )
			.pipe( plugin.gulp.dest( $$.path.dist.fonts ) );
	});
};