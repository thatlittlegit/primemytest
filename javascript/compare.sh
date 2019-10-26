#!/bin/sh
set -e

cd `dirname $0`
node index.js | cmp - ../example.tsv
cd -
