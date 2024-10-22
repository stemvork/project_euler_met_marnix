const fs = require('fs');
const data = fs.readFileSync("./triangle.txt").toString();
const lines = data.trim().split('\n');
const cells = lines.map(line => line.split(' ').map(cell => parseInt(cell)));

for(let row=cells.length-2; row>=0; row--) {
	const r = cells[row];
	for(let col=0; col<r.length; col++) {
		cells[row][col] += Math.max(
			cells[row+1][col], 
			cells[row+1][col+1]
		);
	}
}
console.log(cells[0][0]);
