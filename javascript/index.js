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

if (require.main === module) {
	for (let i = 2; i <= 100000; i++) {
		console.log(`${i}\t${module.exports(i)}`);
	}
}
