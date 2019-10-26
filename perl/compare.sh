#!/bin/sh
set -e

cd `dirname $0`
perl prime.pl | cmp - ../example.tsv
cd -
