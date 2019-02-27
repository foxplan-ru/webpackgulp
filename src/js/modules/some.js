'use strict';

/**
 * 
 * Company: FoxPlan.ru
 * Name: FoxPlan
 * Author: Zubchenko Valentin <admin@foxplan.ru>
 * Version: 1.0.0
 * 
 */

function sum( ...numbers ) {

	let sum = 0;

	for( let i = 0; i < numbers.length; i++ ) {
		sum += numbers[i];
	}

	return sum;

}

function avg( ...numbers ) {

	return sum( ...numbers ) / numbers.length;

}

export default avg;