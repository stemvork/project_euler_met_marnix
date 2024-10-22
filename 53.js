const pascal = (r, c) => {
	if(c === 0 || c === r) return 1;
	return pascal(r-1, c-1) + pascal(r-1, c);
}

const triangle = Array(100);
for(let i=1; i<=100; i++) {
	triangle[i] = [];
	for(let j=0; j<=i; j++) {
		if(j==0 || j===i) triangle[i].push(1);
		else triangle[i].push(triangle[i-1][j-1] + triangle[i-1][j]);
	}
}
// console.log(triangle);

let count = 0;
for(let n=1; n<=100; n++) {
	for(let r=1; r<=100; r++) {
		if(triangle[n][r] > 1e6) count++;
	}
}
console.log(count);
