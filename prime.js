const argv = require("minimist")(process.argv.slice(2));
const _ = {
  find: require("lodash.find"),
  isEmpty: require("lodash.isEmpty")
};


let benchmarking = false;
let toFile = false;
let help = false;

if(!(_.isEmpty(argv._)) || argv.benchmarking || argv.toFile || argv.help ||
    argv.b || argv.f || argv.h) {
  benchmarking = argv.b || argv.benchmarking || false;
  toFile = argv.f || argv.toFile || false;
  help = argv.h || argv.help || false;
}

if(help) {
  console.log("node prime.js [-bfh]");
  console.log("              -h");
  console.log("          --help  Display this help message");
  console.log("");
  console.log("              -b");
  console.log("  --benchmarking  Enable benchmarking mode, to test time until 100K calulated");
  console.log("");
  console.log("              -f");
  console.log("          --file  Write to a file (prime.txt)");
  console.log("");
  console.log("              -e");
  console.log("          --even  Only do odd numbers, except for 2");
  process.exit(0);
}

let currentValue = 1;
let max = 100001;
let start = Date.now();
let bar = require("another-progress-bar")("prime", 60);
for(; currentValue < max; currentValue += 1) {
  let isPrime = true;
  for(let currentModValue = 2; currentModValue < currentValue + 1; currentModValue += 1) {
    if(currentValue % currentModValue === 0 && !(currentModValue === 1 || currentModValue === currentValue)) {
      isPrime = false;
    }
  }
  if(!benchmarking) {
    console.log(currentValue + ": " + isPrime);
  } else {
    bar.progress(currentValue, max);
  }
}
if(benchmarking) {
  console.log("Your score is: " + (Date.now() - start));
}
