/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.gulp.task( 'favicons', () => {
		return plugin.gulp.src( $$.path.src.img + 'favicon/*.{jpg,jpeg,png,gif}' )
			.pipe( plugin.favicon({
				icons: {
					appleIcon: true,
					favicons: true,
					online: false,
					appleStartup: false,
					android: false,
					firefox: false,
					yandex: false,
					windows: false,
					coast: false
				}
			}))
			.pipe( plugin.gulp.dest( $$.path.dist.img + 'favicon/' ) );
	});
};