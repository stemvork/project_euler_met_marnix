// find c1 c2 c3 (lowercase chars)
// decrypt the message with this passkey
// find a key that reads as english
// print sum of the ascii values

const fs = require('node:fs');
const data = fs.readFileSync("./0059_cipher.txt", 'utf-8').trim().split(',').map(x => parseInt(x));

function decrypt_with(data, c) { return data.map((x, xi) => x^c[xi%c.length]); }
function ascii_to_string(data) { 
	return data.map(x => String.fromCharCode(x)).join(''); 
}

for(let i=97; i<123; i++) {
	for(let j=97; j<123; j++) {
		for(let k=97; k<123; k++) {
			const decrypted = decrypt_with(data, [i, j, k]);
			const message = ascii_to_string(decrypted);
			if(message.includes(" the ")) {
				console.log(message);
				console.log(decrypted.reduce((a, b) => a+b, 0));
			}
		}
	}
}
