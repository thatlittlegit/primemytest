/*
  PrimeMyTest 1.0.0
 */
function prime() {
  'use strict';

  function test(current) {
    let isPrime = true;
    for (let i = 2; i < current; i++) {
      if (current % i === 0 && i !== 1) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }

  for (let current = 0;; current++) {
    let out = `${current}: ${test(current)}`;

    require('fs').appendFileSync('prime.txt', `${out}\n`, 'utf-8');
    console.log(out);
  }
}

prime();
