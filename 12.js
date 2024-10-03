function calculateDivisors(n) {
	const result = [1, n];
	for(let i=2; i<Math.sqrt(n); i++) {
		if(n%i==0) {
			result.push(i);
			result.push(n/i);
		}
	}
	result.sort();
	return result;
}

function triangle(i) {
	return i*(i+1)/2;
}

for(let i=1; i<=10**6; i++) {
	const t = triangle(i);
	const d = calculateDivisors(t);
	console.log([d.length, i, t, d]);
	if(d.length > 500) {
		break;
	}
}

