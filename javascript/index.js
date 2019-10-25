/**
  * Checks if the number is a prime number.
  *
  * @param {Number} number The number to test.
  * @returns {Boolean} If it is a prime number.
  */
module.exports = number => {
	const limit = Math.sqrt(number);
	for (let index = 2; index <= limit; index++) {
		if (number % index === 0) {
			return false;
		}
	}

	return true;
};
