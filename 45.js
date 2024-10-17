function get_tri(idx) { return idx * (idx + 1) * 0.5; }
function get_pent(idx) { return idx * (3 * idx - 1) * 0.5; }
function get_hex(idx) { return idx * (2 * idx - 1); }

let i = 286;
let j = 166;
let k = 144;

let tri = get_tri(i);
let pent = get_pent(j);
let hex = get_hex(k);

while(tri !== pent || tri !== hex) {
	if(tri < hex && tri < pent) {
		++i;
		tri = get_tri(i);
	} else if(pent < hex) {
		++j;
		pent = get_pent(j);
	} else {
		++k;
		hex = get_hex(k);
	}
}

console.log(tri);
