const {isPrime} = require('.');

for (let index = 0; index <= 100000; index++) {
	console.log(`${index}	${isPrime(index)}`);
}
