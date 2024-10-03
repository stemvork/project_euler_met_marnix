let knownSequences = []; //the index of the number in this array gives the amount of steps it takes to get to 1
let longestSequence = 0;
let startingNumberLongestSequence = 0;

function nextInSequence(n){
	return n%2 == 0 ? n/2 : 3*n + 1
}

for(let i=1; i<1000000;i++) {
	let current = i;
	let length = 2;
	while((current = nextInSequence(current)) != 1) {
		length++;
	}
	console.log(`Starting with ${i} the length is ${length}`);
	if(length > longestSequence) {
		longestSequence = length;
		startingNumberLongestSequence = i;
	}
}
console.log(startingNumberLongestSequence);

