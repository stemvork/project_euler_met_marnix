/* It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 7x, contain the same digits.*/

function fingerprint(x) {
	let result = 0;
	while(x>1) { 
		const digit = x%10;
		x/=10;
		let pos = 1;
		for(let i=1;i<=digit;i++) {
			pos*=10;
		}
		result += pos;
	}
	return result;
}
// console.log(fingerprint(454430));

function solve() {
	let maxNumber = 1000000;
	let maxMultiple = 6;
	for(let i=1;i<=maxNumber;i++) {
		const id = fingerprint(i);
		let found = true;
		for(let multiple=2;multiple<=maxMultiple;multiple++) {
			if(id !== fingerprint(i * multiple)) {
				found = false;
				break;
			}
		}
		if(found) {
			console.log(i);
		}
	}
	return 0;
}
solve();
