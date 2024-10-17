// 1) 012
// 2) 0123

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

function get_last_number(array, indices) {
	return array.filter(x => !indices.includes(x))[0];
}

function solve(k, n) {
	const array = [...Array(k+1).keys()];
	const indices = [];
	const total = factorial(k+1);
	let remainder = n;
	let divisor = factorial(k);

	for(let i=0; i<k-1; i++) {
		if(remainder <= divisor) break;
		const fits = Math.floor(remainder/divisor);
		console.log("RDI", remainder, divisor, fits);
		// const count_lower = indices.filter(x => x < fits).length;
		indices.push(fits + indices.length);
		//console.log("remainder - index * divisor", remainder, '-', index, '*', divisor);
		remainder -= fits * divisor;
		divisor = factorial(k-(i+1));
		console.log("iRD", i, remainder, divisor);
	}

	if(remainder === 0) indices.push(k);
	else indices.push(remainder-1);
	//console.log(indices);
	// console.log(`${indices.join("")}[${get_last_number(array, indices)}]`);
	return `${indices.join("")}${get_last_number(array, indices)}`;
}

/*
 * first 6
 * 0123
 * ....
 * 0321
 *
 * second 6
 * 1023
 * 1032
 * 1203
 * 1230 (10)
 * 1302
 * 1320
 *
 * third 6
 * 2013
 * 2031
 * 2103
 * 2130
 * 2301 (17)
 * 2310
 *
 * last 6
 * 3012
 * 3021
 * 3102 (21)
 * 3120
 * 3201
 * 3210
*/

console.log('expect 102', solve(2, 3));
console.log('expect 201', solve(2, 5));
console.log('expect 0123', solve(3, 10));
console.log('expect 0123', solve(3, 17));
console.log('expect 0123', solve(3, 21));

console.log(solve(9, 1000000));
