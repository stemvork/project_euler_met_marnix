let r = [6,35];
let b = [15,85];

function iterate() {
	const rn = 2*b[1]+r[1]-1;
	const bn = b[1]+2*rn;
	r[0] = r[1];
	b[0] = b[1];
	r[1] = rn;
	b[1] = bn;
	const p = bn/(rn+bn)*(bn-1)/(rn+bn-1);
	console.log(p);
}

while(r[1]+b[1] <1000000000000) iterate()
console.log(b[1]);
