/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {

	plugin.gulp.task( 'clean', () => {
		return plugin.gulp.src(
				[
					$.path.dist + '/*',
					'!' + $.path.dist + '/js',
				],
				{
					read: false,
					allowEmpty: true
				}
			)
			.pipe( plugin.clean() );
	});
};