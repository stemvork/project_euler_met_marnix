// right angled triangle, pythagoras a*a + b*b = c*c (a < b < c)
const pp = {};
let a=3;
let b=4;
while(true) {
	const c = Math.sqrt(a*a+b*b);
	if(Math.floor(c) === c) {
		// console.log(a, b, c, a+b+c);
		if(pp[a+b+c]) pp[a+b+c]++;
		else pp[a+b+c] = 1;
	}
	if(a+b+c > 1000) {
		a += 1;
		b = a + 1;
	} else {
		b++;
	}
	if(a > 1000-2) break;
}

let largest_i = 0;
let largest_v = 0;
for(let p=3;p<=1000;p++) {
	if(pp[p] > largest_v) {
		largest_v = pp[p];
		largest_i = p;
	}
}
console.log(largest_i); //, largest_v);
