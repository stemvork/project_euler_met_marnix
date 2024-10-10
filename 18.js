const test_case = `3
7 4
2 4 6
8 5 9 3`;

const real_case = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

function create_tree(string) {
	const lines = string.split("\n");
	const cells = lines.map(line => line.split(" ").map(cell => parseInt(cell)));
	return cells;
}

const elements = [0, 1];
const combinations = [];
function generate_combinations(elements, length, list=[]) {
	if(length === 0) { 
		combinations.push(list); 
		return; 
	}
	for(let element of elements) {
		generate_combinations(elements, length-1, [...list, element]);
	}
}
function sum_combination(combination, tree) {
	let row = 0;
	let cell = 0;
	let sum = tree[0][0];
	for(let choice of combination) {
		cell += choice;
		row += 1;
		sum += tree[row][cell];
	}
	return sum;
}
function max_sum(tree) {
	generate_combinations(elements, tree.length-1);
	let largest = 0;
	for(const combination of combinations) {
		largest = Math.max(largest, sum_combination(combination, tree));
	}
	return largest;
}

function solve(string) {
	console.log(max_sum(create_tree(string)));
}
solve(real_case);
