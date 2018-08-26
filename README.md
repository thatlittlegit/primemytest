# PrimeMyTest [![Travis CI](https://img.shields.io/travis/thatlittlegit/primemytest.svg)](https://travis-ci.org/thatlittlegit/primemytest)
PrimeMyTest simply generates prime numbers. It is written in node.js.

## Usage
After installing dependencies with `npm install`, run `node index.js --help`.

### Flags
To only run on odd numbers: `--odds`

#### Calculation Mode
Use the `calculate` subcommand to output the prime status infinitely in TSV
format.

#### Benchmarking Mode
Using the `benchmarking` subcommand will calculate the prime status of all the
numbers until 100,000. Use the `--interactive` flag to inform you of its status
as it runs.

### Output Format
#### Calculation Mode
By default, PrimeMyTest outputs in TSV format. The first column is the number;
the second is the value in a boolean format (`true` or `false`).

For example:
```shell
$ node index.js calculate | head
2       true
3       true
4       false
5       true
6       false
7       true
8       false
9       false
10      false
11      true
^C
$ # the program does not automatically terminate :(
```

#### Benchmarking Mode
In non-interactive (default) mode, the amount of milliseconds since the program
started is put on stdout.

For example:
```shell
$ node index.js benchmarking
48345
$
```

##### Interactive Mode
*Not recommended for parsing!* It's designed for use in the Terminal.

Outputs a warning in yellow about preformance, and then outputs `XXXXXX of
100000 (YYYYYYYY)`, where `X` is the current number and `Y` is the current
score. `X` is padded to 6 with zeros, `Y` to 8.

For example:
```shell
$ node index.js benchmarking --interactive
WARNING: interactive mode can be slower than non-interactive!
100000 of 100000 (00048345)
48345
```

You may note it is slightly slower.

## License
PrimeMyTest is licensed under the MIT License.
