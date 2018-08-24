import test from 'ava';
import {isPrime, getNumberOfFactors, findAllPrimesUntilNumberAndCallCallbackForEach} from '.';

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

test('getNumberOfFactors', t => {
	const results =
		[
			0, // 0
			0, // 1
			0, // 2
			0, // 3
			1, // 4
			0, // 5
			2, // 6
			0, // 7
			2, // 8
			1 // 9
		];

	for (let index = 0; index < 10; index++) {
		t.is(getNumberOfFactors(index), results[index]);
	}
});

test('findAllPrimesUntilNumberAndCallCallbackForEach', t => {
	findAllPrimesUntilNumberAndCallCallbackForEach(1, 9, (number, result) => {
		t.is(result, isPrime(number));
	});
});
