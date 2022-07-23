const thorenator = require('../index');
const assert = require('assert');

describe('thorenator', () => {
	describe('.arr()', () => {
		let arr = thorenator.arr();
		it('should generate a length 10 array', () => {
			assert.equal(arr.length, 10);
		});
		it('should generate numbers between defaults 1-100', () => {
			let min = 1;
			let max = 100;
			let isLessThanMin = false;
			let isMoreThanMax = false;
			arr.forEach((number, index) => {
				if (number < min) {
					isLessThanMin = true;
				}
				if (number > max) {
					isMoreThanMax = true;
				}
			});
			assert.equal(isLessThanMin, false);
			assert.equal(isMoreThanMax, false);
		});
	});
	describe('.arr(100, 5, 5)', () => {
		let arr = thorenator.arr(100, 5, 5);
		it('should generate a length 100 array', () => {
			assert.equal(arr.length, 100);
		});
		it('should generate only 5s', () => {
			let isNotFive = false;
			arr.forEach((number, index) => {
				if (number !== 5) {
					isNotFive = true;
				}
			});
			assert.equal(isNotFive, false);
		});
	});
});