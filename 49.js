function sieve(n) {
	const array = Array(n).fill(true);
	const ulim = Math.sqrt(n);
	const output = [];

	for(let i=2; i<=ulim; i++) {
		if(array[i]) {
			for(let j=i*i; j<n; j+= i) {
				array[j] = false;
			}
		}
	}

	for(let i=2; i<n; i++) {
		if(array[i]) {
			output.push(i);
		}
	}

	return output;
}
const primes = sieve(1e5);

function are_permutant(a, b) {
	const aa = a.toString().split('').sort();
	const bb = b.toString().split('').sort();
	return aa.every((x, xi) => x === bb[xi]);
}
function are_prime(a, b, c) {
	return [a, b, c].every(x => primes.includes(x));
}
for(let a=1111; a<1e4; a++) {
	const k_max = (9999 - a) / 2;
	for(let k=1; k<k_max; k++) {
		let b = a+k;
		if(!are_permutant(a, b)) continue;
		let c = b+k;
		if(!are_permutant(a, c)) continue;
		if(!are_prime(a, b, c)) continue;
		console.log(a, b, c);
	}
}
// TODO: submit 296962999629
