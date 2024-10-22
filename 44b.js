const p = {};
function get_pent(i) { 
	if(p[i]) return p[i];
	p[i] = i*(3*i-1)/2;
	return p[i]; 
}
function is_pent(pn) {
	const disc = 1+24*pn;
	const disc_sqrt = Math.floor(Math.sqrt(disc));
	if(disc_sqrt * disc_sqrt !== disc) return false;
	return (disc_sqrt+1)%6 === 0;
}

function solve() {
	for(let i=2;i<1e6;i++) {
		const d = get_pent(i);
		const twod = 2*d;
		// Constraint 1: 2D>=3A^2
		for(let A=1; 3*A*A<=twod; A++) {
			if((twod % A)!== 0) continue;
			const B = twod/A;
			// Constraint 2: 3 | B+1
			if((B+1)%3 !== 0) continue;
			// Constraint 3: 2 | (B+1)/3-A
			if(((B+1)/3-A)&1) continue;
			const j = ((B+1)/3-A)/2;
			const k = A+j;
			const pj = get_pent(j);
			const pk = get_pent(k);
			const sum = pj + pk;
			if(is_pent(sum)) {
				console.log(`Solution ${d}`);
				return 0;
			}
		}
	}
}
solve();
