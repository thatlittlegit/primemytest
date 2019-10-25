import test from 'ava';
import {isPrime, findAllPrimesUntilNumberAndCallCallbackForEach} from '.';

test('isPrime', t => {
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

	for (let index = 0; index < 10; index++) {
		if (results[index] !== null) {
			t.is(isPrime(index), results[index]);
		}
	}
});
