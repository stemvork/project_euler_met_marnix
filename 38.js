const sortString = (str) => { 
	return [...str].sort((a, b) => a.localeCompare(b)).join(''); 
}

const is_pandigital = (n) => {
	return sortString(`${n}`) === '123456789'.slice(0, `${n}`.length);
}

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

function is_concatenated_product(n) {
	const s = n.toString();
	for(let k=1; k<s.length; k++) {
		const multiplicand = parseInt(s.slice(0, k));
		let result = multiplicand;
		for(let j=2;; j++) {
			result = parseInt(`${result}${j*multiplicand}`);
			if(result > n) break;
			if(result === n) return true;
		}
	}
	return false;
}

let largest = 0;
const permutations = permuteString('123456789', 0, []).map(x => parseInt(x));
for(const p of permutations) {
	if(is_concatenated_product(p) && p > largest) largest = p;
}
console.log(largest);
