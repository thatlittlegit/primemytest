const isPrime = require('.');


const results = [
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

console.log(`1..${results.length - 2}`);

for (let index = 2; index < 10; index++) {
	console.log(`${isPrime(index) === results[index] ? 'ok' : 'not ok'} ${index - 1} - Test iteration ${index}`);
}
