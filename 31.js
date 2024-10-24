const coins = [1, 2, 5, 10, 20, 50, 100, 200];
const transform = [
	[1, 0, 0, 0, 0, 0, 0, 0],
	[2, 0, 0, 0, 0, 0, 0, 0],
	[1, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 0, 0],
	[0, 0, 0, 1, 2, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0]
];

function add(a, b) { return a.map((x, xi) => x + b[xi]); }

let state = [0, 0, 0, 0, 0, 0, 0, 1];
function get_pivot(state) {
	let bits = state.map(x => x !== 0).slice(1);
	let k = bits.indexOf(true) + 1;
	return k;
}
function solve(state, count) {
	// console.log('state', ...state);
	let bits = state.map(x => x !== 0).slice(1);
	//console.log('bits', ...bits);
	let k = bits.indexOf(true) + 1;
	//console.log('updating with row', k);
	const new_state = add(state, transform[k]);
	new_state[k] = state[k] - 1;
	console.log(`i=${count}${" ".repeat(3-count.toString().length)}:`, ...new_state);
	if(get_pivot(new_state)) return solve(new_state, count+1);
	return count+1;
}
console.log(solve(state, 0));
