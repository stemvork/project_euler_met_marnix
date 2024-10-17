// https://en.wikipedia.org/wiki/Factorial_number_system#Permutations
// Or 24-wiki.png

const f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

function decimal_to_factoradic(n, k) {
	if(n >= factorial(k)) return undefined;

	const indices = [];
	let i_div = k - 1;
	let div   = factorial(i_div);
	let index = Math.floor(n / div);
	while(true) {
		indices.push(index);
		n -= index * div;
		i_div--;
		if(i_div <= 0) break;
		div = factorial(i_div);
		index = Math.floor(n / div);
	}

	return [...indices, 0];
}

function factoradic_to_permutation(indices, k) {
	const array = [...Array(k).keys()];
	// console.log('selecting', indices, 'from', array);
	const result = [];
	for(const index of indices) {
		const n = array.splice(index, 1)[0]; // FIX: pop(i) is not a thing.
		result.push(n);
	}
	return result;
}

//console.log(decimal_to_factoradic(5, 3));
//console.log(decimal_to_factoradic(2982, 7));
//console.log(decimal_to_factoradic(999999, 10));
//
//console.log(factoradic_to_permutation(decimal_to_factoradic(5, 3), 3));
//console.log(factoradic_to_permutation(decimal_to_factoradic(2982, 7), 7));
//console.log(factoradic_to_permutation(decimal_to_factoradic(999999, 10), 10));

function solve(n, k) {
	console.log(factoradic_to_permutation(decimal_to_factoradic(n, k), k).join(""));
}

solve(999999, 10);
