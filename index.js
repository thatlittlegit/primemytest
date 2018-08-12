const argv = require("commander");

argv
    .version(JSON.parse(require('fs').readFileSync('package.json', 'utf-8')).version)
    .option('-b, --benchmarking', 'enable benchmarking mode, to test time until 100K calculated')
    .option('-i, --interactive', 'enable interactive mode; no effect unless used with --benchmarking')
    .option('-e, --even', 'only do odd numbers')
    .parse(process.argv);

const findAllPrimesUntilNumberAndCallCallbackForEach = (number, limit, cb, dontDoEvens) => {
  while (number++ < limit) {
    if (dontDoEvens ? number % 2 !== 0 : true) cb(number, isPrime(number));
  }
}

// This system is much less efficient than the old one. It calculates ALL FACTORS
// and doesn't stop at the first found, unlike the old system.
//
// I don't see a good way to fix this while retaining the current system.
const isPrime = number => getNumberOfFactors(number) === 0;
const getNumberOfFactors = number => (
  [...Array(number)]
    .map((unused, key) => key > 2 ? number % key === 0 : false)
    .filter(value => value)
    .length
);
let start = Date.now();
let doEvens = true;

if (argv.benchmarking) {
  if (argv.interactive) console.log("\x1B[33mWARNING: interactive mode can be slower than non-interactive!\x1B[m");
  let start = Date.now();
  findAllPrimesUntilNumberAndCallCallbackForEach(1, 10000, argv.interactive ? number => {
    process.stdout.write(`\x1B[2K\x1B[1G${String(number).padStart(6, '0')} of 100000 (${String(Date.now() - start).padStart(8, '0')})`);
  } : () => {});

  if (argv.interactive) console.log("");
  console.log(Date.now() - start);
} else {
    findAllPrimesUntilNumberAndCallCallbackForEach(1, Infinity, (number, result) => console.log(`${number}\t${result}`), argv.even);
}
