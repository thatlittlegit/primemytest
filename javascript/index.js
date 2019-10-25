/**
  * Checks if the number is a prime number.
  *
  * @param {Number} number The number to test.
  * @returns {Boolean} If it is a prime number.
  */
const isPrime = number => {
	const limit = Math.sqrt(number);
	for (let index = 2; index <= limit; index++) {
		if (number % index === 0) {
			return false;
		}
	}

	return true;
};

/**
  * From `number` to `limit`, call `cb` with the current number and whether or
  * not it is a prime. Skips even numbers if `dontDoEvens` is true.
  *
  * @param {Number} number The number to start at.
  * @param {Number} limit The number to stop at.
  * @param {Function} cb The callback to run at each number.
  * @param {Boolean} dontDoEvens Whether or not to do even numbers.
  * @returns {undefined}
  */
const findAllPrimesUntilNumberAndCallCallbackForEach = (number, limit, cb, dontDoEvens) => {
	while (number++ < limit) {
		if (dontDoEvens ? number % 2 !== 0 : true) {
			cb(number, isPrime(number));
		}
	}
};

module.exports = {
	findAllPrimesUntilNumberAndCallCallbackForEach,
	isPrime
};

