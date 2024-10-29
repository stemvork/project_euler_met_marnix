//const pn = [0];
//for(let k=0; k<1000; k++) {
//	pn.push(1 / (2 + pn[k]));
//}
const sn = [[1n, 1n]];
const pn = [[0n, 1n]];
let count = 0;
for(let k=0; k<1000; k++) {
	pn.push([pn[k][1], 2n*pn[k][1]+pn[k][0]]);
	sn.push([pn[k+1][0] + pn[k+1][1], pn[k+1][1]]);
	if(sn[k+1][0].toString().length > sn[k+1][1].toString().length) count++;
}
console.log(count);
