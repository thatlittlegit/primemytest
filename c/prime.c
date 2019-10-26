#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

static inline void printstatus(int num, bool isPrime) {
	printf("%d\t%s\n", num, isPrime ? "true" : "false");
}

static inline bool calculateprime(int num) {
	double provided = sqrt((double) num);
	register int root = (int) provided;

	for (register int i = 2; i <= root; i++)
	{
		if (num % i == 0) return false;
	}

	return true;
}

int main() {
	for(register int i = 2; i <= 100000; i++) {
		printstatus(i, calculateprime(i));
	}
}
