// FIX: INCORRECT ANSWER
//
//const visited = {};
//let total = 0;
//for(let product=1; product<987654321; product++) {
//	const s = Math.sqrt(product);
//	for(let multiplicand=1; multiplicand<s; multiplicand++) {
//		const multiplier = product / multiplicand;
//		if(Math.floor(multiplier) === multiplier) {
//			total += product;
//			break;
//		}
//	}
//}
//console.log(total);


const sortString = (str) => { 
	return [...str].sort((a, b) => a.localeCompare(b)).join(''); 
}
const is_pandigital_product = (a, b) => {
	return sortString(`${a}${b}${a*b}`) === '123456789';
}

let total = 0;
let products = {};

const numbers = '123456789';
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
const permutations = permuteString('123456789', 0, []);
for(const p of permutations) {
	for(let k=1; k<p.length-1; k++) {
		for(let l=k+1; l<p.length; l++) {
			const [a, b, c] = [
				parseInt(p.slice(0, k)),
				parseInt(p.slice(k, l)), 
				parseInt(p.slice(l))];
			if(products[c] !== undefined) continue;
			if(a*b !== c) continue;
			if(is_pandigital_product(a, b)) {
				total += c;
				products[c] = true;
			}
		}
	}
}
console.log(total);
