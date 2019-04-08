#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

#ifdef USE_SYSCALLS
#include <stdlib.h>
#include <unistd.h>

// minimum size 50
char* globalBuffer = NULL;

static inline void printstatus(int num, bool isPrime) {
	snprintf(globalBuffer, 50, "%d\t%s\n", num, isPrime ? "true" : "false");
	register int ignore = write(STDOUT_FILENO, globalBuffer, strlen(globalBuffer));
}
#else
static inline void printstatus(int num, bool isPrime) {
	printf("%d\t%s\n", num, isPrime ? "true" : "false");
}
#endif

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
#ifdef USE_SYSCALLS
	globalBuffer = malloc(50);
#endif

	for(register int i = 2; i <= 100000; i++) {
		printstatus(i, calculateprime(i));
	}
}
