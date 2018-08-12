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

const program = require("commander");

program
    .version(JSON.parse(require('fs').readFileSync('package.json', 'utf-8')).version)
    .option('-e, --even', 'only do odd numbers');

program
    .command('benchmarking')
    .alias('b')
    .description('enable benchmarking mode; to test time until 100K calculated')
    .option('-i, --interactive', 'enable interactive mode')
    .action(options => {
        const interactive = options.interactive;
        if (interactive) console.log("\x1B[33mWARNING: interactive mode can be slower than non-interactive!\x1B[m");
        let start = Date.now();
        findAllPrimesUntilNumberAndCallCallbackForEach(1, 10000, interactive ? number => {
            process.stdout.write(`\x1B[2K\x1B[1G${String(number).padStart(6, '0')} of 100000 (${String(Date.now() - start).padStart(8, '0')})`);
        } : () => {}, Boolean(program.even));

        if (interactive) console.log("");
        console.log(Date.now() - start);
    })

program
    .command('calculate', {isDefault: true})
    .alias('c')
    .description('calculate prime numbers and output to STDOUT')
    .action(() => {
        findAllPrimesUntilNumberAndCallCallbackForEach(1, Infinity, (number, result) => console.log(`${number}\t${result}`), Boolean(program.even));
    });

program.parse(process.argv);
