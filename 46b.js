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

const limit = 1e6;
const gold = Array(limit).fill(false);
const primes = sieve(limit);

function solve() {
	let k=3;
	while(k < limit) {
		while(primes.includes(k)) k += 2;
		let gold = false;
		for(const prime of primes) {
			if(prime > k) break;
			const x = Math.floor((k - prime)/2);
			if(Math.floor(Math.sqrt(x)) === Math.sqrt(x)) {
				gold = true;
				break;
			}
		}
		if(!gold) return k;
		k += 2;
	}
}
console.log(solve());
