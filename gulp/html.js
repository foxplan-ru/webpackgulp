/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.gulp.task( 'pug', () => {
		return plugin.gulp.src($$.path.src.pug + 'pages/**/*.pug')
			.pipe( plugin.pug({
				pretty: true
			}))
			.pipe( plugin.gulp.dest( $$.path.dist.html ) );
	});

	plugin.gulp.task( 'prettify', () => {
		return plugin.gulp.src( $$.path.dist.html + '/**/*.html' )
			.pipe( plugin.prettify({
				indent_size: 4
			}))
			.pipe( plugin.gulp.dest( $$.path.dist.html ) )
			.on( 'end', plugin.browserSync.reload );
	});

	plugin.gulp.task( 'html', plugin.gulp.series( 'pug', 'prettify' ));
};