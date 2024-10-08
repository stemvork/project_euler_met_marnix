function nextInSequence(n) {
	return n%2 == 0 ? n/2 : 3*n + 1
}

const times = [];

function naive() {
	let longestSequence = 0;
	let startingNumberLongestSequence = 0;

	let n = 1000000;
	const startTime = performance.now();
	for(let i=1; i<1000000;i++) {
		let current = i;
		let length = 2;
		while((current = nextInSequence(current)) != 1) {
			length++;
		}

		if(length > longestSequence) {
			longestSequence = length;
			startingNumberLongestSequence = i;
		}
	}
	const endTime = performance.now();
	console.log(startingNumberLongestSequence);
	console.log("Program took:", endTime-startTime);
	times.push(endTime-startTime);
}

function firstOptimised() {
	let knownSequences = []; //the index of the number in this array gives the amount of steps it takes to get to 1
	let longestSequence = 0;
	let startingNumberLongestSequence = 0;

	let n = 1000000;
	const debug = false;
	const startTime = performance.now();
	for(let i=1; i<1000000;i++) {
		let current = i;
		let length = 2;
		debug && console.log(`Calculating sequence for ${i}`);
		while((current = nextInSequence(current)) != 1) {
			if(knownSequences[current] !== undefined) {
				debug && console.log(`Found ${current} in known sequences with length ${knownSequences[current]}`);
				length += knownSequences[current];
				break;
			}
			length++;
		}

		debug && console.log(`Starting with ${i} the length is ${length}`);
		knownSequences[i] = length;

		if(length > longestSequence) {
			longestSequence = length;
			startingNumberLongestSequence = i;
		}
		debug && console.log();
	}
	const endTime = performance.now();
	console.log(startingNumberLongestSequence);
	console.log("Program took:", endTime-startTime);
	times.push(endTime-startTime);
}

naive();
firstOptimised();

console.log('-'.repeat(80));

times.sort((a, b) => a-b); // NB: this is by default a lexical sort
console.log("Absolute:", times);
for(let i=1; i<times.length; i++) {
	times[i] /= times[0];
}
times[0] = 1;
console.log("Relative:", times);
