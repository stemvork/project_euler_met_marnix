function is_palindrome(n) {
	const s = n.toString();
	return s === s.split('').reverse().join('');
}
function is_lychrel(n) {
	for(let k=0; k<50; k++) {
		n = n + parseInt(n.toString().split('').reverse().join(''));
		if(is_palindrome(n)) return false;
	}
	return true;
}
let count = 0;
for(let i=12; i<10001; i++) {
	//if(!is_palindrome(i)) continue;
	if(is_lychrel(i)) {
		console.log(i);
		count++;
	}
}
console.log(count);
