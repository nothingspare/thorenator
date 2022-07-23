const rn = require('random-number');

/**
 * A generator for creating random unsorted datastructures.
 * @class Thorenator
 */
module.exports = {
	/**
	 * Generates a flat, unsorted numerical array of $size with elements between $min/$max integer values.
	 * @param {number} [size=10] - Size of resulting Array
	 * @param {number} [min=1] - Minimum integer value of an element
	 * @param {number} [max=100] - Maximum integer value of an element
	 * @returns {Array}
	 */
	arr: function (size=10, min=1, max=100) {
		let options = {
			min: min,
			max: max,
			integer: true
		};
		let arr = [];
		for (i=0; i<size; i++) {
			arr.push(rn(options));
		}
		return arr;
	}
};