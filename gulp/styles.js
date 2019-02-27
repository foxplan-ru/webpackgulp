/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

module.exports = () => {
	plugin.sass.compiler = require('node-sass');

	plugin.gulp.task( 'style', () => {
		return plugin.gulp.src($$.path.src.style + '*.sass' )
			//.pipe( plugin.sourcemaps.init() )
			.pipe( plugin.sass().on( 'error', plugin.sass.logError ) )
			.pipe( plugin.autoprefixer({
				browsers: ['last 12 versions', '> 1%', 'ie 8', 'ie 7']
			}))
			.pipe( plugin.gcmq() )
			//.pipe( plugin.sourcemaps.write( './' ) )
			.pipe( plugin.gulp.dest( $$.path.dist.style ) )
			// .pipe( plugin.gulpIf( '*.css', plugin.cleanCSS({
			// 	compatibility: 'ie8',
			// 	level: {
			// 		1: {
			// 			specialComments: 0
			// 		}
			// 	}
			// })))
			// .pipe( plugin.rename({
			// 	suffix: '.min'
			// }))
			// .pipe( plugin.gulp.dest( $$.path.dist.style ) )
			.on( 'end', plugin.browserSync.reload );
	});
};