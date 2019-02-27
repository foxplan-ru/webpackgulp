'use strict';

/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

let path = require( 'path' );

let cfg = {

	entry: {

		index: './src/js/index',
		error: './src/js/error',
		admin: './src/js/admin',
		common: './src/js/common'

	},

	output: {

		path: path.resolve( __dirname, './dist/js' ),
		filename: '[name].js',
		library: '[name]'

	},

	module: {

		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
		]

	},

	optimization : {

		minimize : false,
		runtimeChunk : {
			name : 'common'
		},
		splitChunks : {
			cacheGroups : {
				default : false,
				commons : {
					test : /\.js$/,
					chunks : 'all',
					minChunks : 2,
					name : 'common',
					enforce : true
				}
			}
		}

	},

};

module.exports = ( env, options ) => {

	let mode = options.mode === 'production';

	cfg.devtool = mode
				   ? false
				   : 'eval';

	return cfg;

};