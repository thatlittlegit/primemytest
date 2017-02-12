/*
  PrimeMyTest 1.0.0
 */
function prime() {
  "use strict";
  const jQuery = require("jquery");
  const $ = jQuery;
  const util = require("util");
  let current = 0;
  let run = true;

  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("line", function(){
    run = false;
  });

  function test() {
    current++;
    let work = true;
    util.print("TESTING: " + current + " ");
    for (let i = 2; i < current; i++) {
      if (current % i === 0 && i !== 1) {
        work = false;
        break;
      }
    }
    if (work === false) {
      return false;
    } else {
      return true;
    }
  }
  let out;
  while (run === true) {
    out = test();
    require("fs").appendFile("prime.txt", current + ": " + out, "utf-8", function(e) {
      if (e) {
        throw e;
      }
    });
    console.log(out);
  }
}
prime();
