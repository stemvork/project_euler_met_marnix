function get_digits(a, b) {
	return [
		...a.toString().split('').map(x => parseInt(x)), 
		...b.toString().split('').map(x => parseInt(x))
	];
}

let numerator = 1;
let denominator = 1;
for(let a = 10; a <= 99; a++) {
	for(let b = a; b <= 99; b++) {
		const result = a / b;
		if(result === 1) continue;
		if(a % 10 === 0 && b % 10 === 0) continue;

		const [p, q, r, s] = get_digits(a, b);
		if(p === q && r === s) continue;
		//if(p/r === result && q !== 0 && s !== 0) console.log(a, b, result, p, r);
		if(p/r === result && q === s) {
			console.log(a, b, result, p, r);
			numerator *= p;
			denominator *= r;
		}
		else if(p/s === result && q === r) {
			console.log(a, b, result, p, s);
			numerator *= p;
			denominator *= s;
		}
		else if(q/r === result && p === s) {
			console.log(a, b, result, q, r);
			numerator *= q;
			denominator *= r;
		}
		else if(q/s === result && p === r) {
			console.log(a, b, result, q, s);
			numerator *= q;
			denominator *= s;
		}
		// console.log(a, b, a/b, p, q, r, s);
	}
}

console.log(numerator, '/', denominator);
