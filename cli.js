const program = require('commander');
const {findAllPrimesUntilNumberAndCallCallbackForEach} = require('.');

program
	.version(JSON.parse(require('fs').readFileSync('package.json', 'utf-8')).version)
	.option('-o, --odds', 'only do odd numbers');

program
	.command('benchmarking')
	.alias('b')
	.description('enable benchmarking mode; to test time until 100K calculated')
	.option('-i, --interactive', 'enable interactive mode')
	.action(options => {
		const {interactive} = options;
		if (interactive) {
			console.log('\u001B[33mWARNING: interactive mode can be slower than non-interactive!\u001B[m');
		}
		const start = Date.now();
		findAllPrimesUntilNumberAndCallCallbackForEach(1, 100000, interactive ? number => {
			process.stdout.write(`\u001B[2K\u001B[1G${String(number).padStart(6, '0')} of 100000 (${String(Date.now() - start).padStart(8, '0')})`);
		} : () => {}, Boolean(program.odds));

		if (interactive) { 
			console.log(''); 
		} 
		console.log(Date.now() - start); 
	});

program
	.command('calculate')
	.alias('c')
	.description('calculate prime numbers and output to STDOUT')
	.action(() => {
		findAllPrimesUntilNumberAndCallCallbackForEach(1, Infinity, (number, result) => console.log(`${number}\t${result}`), Boolean(program.odds));
	});

if (require.main === module) {
	program.parse(process.argv);
}
