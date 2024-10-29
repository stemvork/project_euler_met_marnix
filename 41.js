const sortString = (str) => { 
	return [...str].sort((a, b) => a.localeCompare(b)).join(''); 
}

const is_pandigital = (n) => {
	return sortString(`${n}`) === '123456789'.slice(0, `${n}`.length);
}

const is_prime = n => {
	const s = Math.ceil(Math.sqrt(n));
	if(n%2 === 0) return false;
	for(let k=3; k<=s; k+=2) {
		if(n%k === 0) return false;
	}
	return true;
}
// console.log(is_pandigital(163452));

function swap_string(s, a, b) {
	if(a === b) return s;
	if(a > b) return swap_string(s, b, a);
	if(a < b) {
		return s.substring(0, a) + s[b] + s.substring(a+1, b) + s[a] + s.substring(b+1);
	}
}

function permuteString(s, i, result) {
	if(i === s.length - 1) {
		result.push(s);
		return;
	}
	for(let j=i; j<s.length; j++) {
		swappedString = swap_string(s, i, j);
		permuteString(swappedString, i+1, result);
	}
	return result;
}

let largest = 0;
const numbers = '123456789';
for(let k=2; k<10; k++) {
	const string = numbers.slice(0, k);
	const permutations = permuteString(string, 0, []);
	for(const p of permutations) {
		if(is_prime(p) && p > largest) largest = p;
	}
}
console.log(largest);
