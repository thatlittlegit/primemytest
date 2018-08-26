/*
  PrimeMyTest 1.0.0
 */
function prime() {
  "use strict";

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

  for (let current = 0;; current++){
    let out = test(current);
    require("fs").appendFile("prime.txt", current + ": " + out, "utf-8", function(e) {
      if (e) {
        throw e;
      }
    });
    console.log(current + ": " + out);
  }
}
prime();
