/**
  * Get the number of factors in a given number, starting at two.
  *
  * @param {Number} number The number to generate it for.
  * @returns {Number} The number of factors.
  */
const getNumberOfFactors = number => {
	let found = 0;
	for (let index = 2; index < number; index++) {
		if (number % index === 0) {
			found += 1;
		}
	}

	return found;
};

/**
  * Checks if the number of factors in a given number, aside from zero and one,
  * is zero.
  *
  * @param {Number} number The number to test.
  * @returns {Boolean} If it is a prime number.
  */
const isPrime = number => getNumberOfFactors(number) === 0;

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
	isPrime,
	getNumberOfFactors
};

const program = require('commander');

program
	.version(JSON.parse(require('fs').readFileSync('package.json', 'utf-8')).version)
	.option('-o, --odds', 'only do odd numbers');

program
	.command('benchmarking')
	.alias('b')
	.description('enable benchmarking mode; to test time until 100K calculated')
	.option('-i, --interactive', 'enable interactive mode')
	.action(options => {
		const {interactive} = options;
		if (interactive) {
			console.log('\u001B[33mWARNING: interactive mode can be slower than non-interactive!\u001B[m');
		}
		const start = Date.now();
		findAllPrimesUntilNumberAndCallCallbackForEach(1, 100000, interactive ? number => {
			process.stdout.write(`\u001B[2K\u001B[1G${String(number).padStart(6, '0')} of 100000 (${String(Date.now() - start).padStart(8, '0')})`);
		} : () => {}, Boolean(program.odds));

		if (interactive) {
			console.log('');
		}
		console.log(Date.now() - start);
	});

program
	.command('calculate')
	.alias('c')
	.description('calculate prime numbers and output to STDOUT')
	.action(() => {
		findAllPrimesUntilNumberAndCallCallbackForEach(1, Infinity, (number, result) => console.log(`${number}\t${result}`), Boolean(program.odds));
	});

if (require.main === module) {
	program.parse(process.argv);
}
