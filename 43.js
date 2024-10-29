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

function is_substring_divisible(n) {
	const s = n.toString();
	const d = [1, 2, 3, 5, 7, 11, 13, 17];
	for(let k=0; k<s.length-2; k++) {
		if(parseInt(s.slice(k, k+3)) % d[k] !== 0) return false;
	}
	return true;
}
// console.log(is_substring_divisible(1406357289));

let sum = 0;
const numbers = '0123456789';
const permutations = permuteString(numbers, 0, []).map(x => parseInt(x));
for(const p of permutations) {
	if(p.toString().length === numbers.length && is_substring_divisible(p)) { 
		sum += p;
		console.log(p);
	}
}
console.log(sum); // TODO: submit 17264606346
