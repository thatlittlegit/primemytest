#!/bin/sh
set -e

cd `dirname $0`
make prime
./prime | cmp - ../example.tsv
make clean
cd -
