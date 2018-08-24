const {isPrime, getNumberOfFactors, findAllPrimesUntilNumberAndCallCallbackForEach} = require('.');

const stack = '';

const isPrimeResults = [
	null, // 0 (not tested)
	null, // 1 (not tested)
	true, // 2
	true, // 3
	false, // 4
	true, // 5
	false, // 6
	true, // 7
	false, // 8
	false // 9
];
const getNumberOfFactorsResults = [
	0,
	0,
	1,
	0,
	2,
	0,
	2,
	1,
	2
];

([
	['isPrime', () => {
		try {
			for (let index = 0; index < 10; index++) {
				if (isPrimeResults[index] !== null && isPrime(index) !== isPrimeResults[index]) {
					throw new Error(`FAIL on ${index}: ${isPrime(index)} v.s. ${isPrimeResults[index]}`);
				}
			}
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}],
	['getNumberOfFactors', () => [...new Array(10)].map((unused, index) => getNumberOfFactors(index) === getNumberOfFactorsResults[index]).reduce((x, y) => x || y) === true],
	['findAllPrimesUntilNumberAndCallCallbackForEach', () => {
		try {
			findAllPrimesUntilNumberAndCallCallbackForEach(1, 9, (number, result) => {
				if (result !== isPrime(number)) {
					throw new Error(`FAIL on ${number}: ${isPrime(number)} v.s. ${result}`);
				} // Fail
			});
			return true;
		} catch (e) {
			return false;
		}
	}]
]).forEach(func => func[1]() ? console.log(`ok\t${func[0]}`) : console.log(`not ok\t${func[0]}\n${stack.replace(/^/g, '\t')}`));
