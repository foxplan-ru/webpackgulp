/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.gulp.task('build', plugin.gulp.series(
		'clean',
		'html',
		'style',
		'images',
		'favicons',
		'fonts'
	));
};