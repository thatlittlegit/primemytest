/*
  PrimeMyTest 1.0.0
 */
'use strict';

function isPrime(current) {
  for (let i = 2; i < current; i++) {
    if (current % i === 0 && i !== 1) {
      return false;
    }
  }

  return true;
}

for (let current = 0;; current++) {
  let out = `${current}: ${isPrime(current)}`;

  require('fs').appendFileSync('prime.txt', `${out}\n`, 'utf-8');
  console.log(out);
}
