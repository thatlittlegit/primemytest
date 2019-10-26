#!/usr/bin/env perl
use warnings;
use strict;

sub isPrime {
	my $number = $_[0];
	my $limit = sqrt $number;
	
	for (my $i = 2; $i <= $limit; $i++) {
		if ($number % $i == 0) {
			return 0;
		}
	}
	
	return 1;
}

for (my $i = 2; $i <= 100000; $i++) {
	print $i . "\t" . (isPrime($i) ? "true" : "false") . "\n";
}
