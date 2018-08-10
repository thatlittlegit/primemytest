const argv = require("minimist")(process.argv.slice(2));

let benchmarking = argv.b || argv.benchmarking || false;
let help = argv.h || argv.help || false;
let even = argv.e || argv.even || false;
let interactive = argv.i || argv.interactive || false;

if (help) {
  console.log("node prime.js [-bfhe]");
  console.log("              -h");
  console.log("          --help  Display this help message");
  console.log("");
  console.log("              -b");
  console.log("  --benchmarking  Enable benchmarking mode, to test time until 100K calulated");
  console.log("");
  console.log("              -i");
  console.log("   --interactive  Enable interactive mode. No effect unless used with --benchmarking.");
  console.log("");
  console.log("              -e");
  console.log("          --even  Only do odd numbers, except for 2");
  process.exit(0);
}

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

if (benchmarking) {
  if (interactive) console.log("\x1B[33mWARNING: interactive mode can be slower than non-interactive!\x1B[m");
  let start = Date.now();
  findAllPrimesUntilNumberAndCallCallbackForEach(1, 10000, interactive ? number => {
    process.stdout.write(`\x1B[2K\x1B[1G${String(number).padStart(6, '0')} of 100000 (${String(Date.now() - start).padStart(8, '0')})`);
  } : () => {});

  if (interactive) console.log("");
  console.log(Date.now() - start);
} else {
    findAllPrimesUntilNumberAndCallCallbackForEach(1, Infinity, (number, result) => console.log(`${number}\t${result}`), even);
}
