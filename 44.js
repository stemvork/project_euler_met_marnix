const p = { 1: 1 };
function get_pent(i) { 
	if(p[i]) return p[i];
	else {
		p[i] = i*(3*i-1)*0.5; 
		return p[i];
	}
}

const state = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	f1: 3*(3*3-1)/(1*(3*1-1)) - 2*(3*2-1)/(1*(3*1-1)),
	f2: 4*(3*4-1)/(2*(3*2-2)) - 3*(3*3-1)/(2*(3*2-2)),
};

function display_state(state, prefix="") {
	const { a, b, c, d, f1, f2 } = state;
	console.log(`${prefix} { ${a}, ${b}, ${c}, ${d} -> ${f1.toFixed(2)}, ${f2.toFixed(2)} }`);
}

function enrich_state(state) {
	const aa = state.a*(3*state.a-1);
	const bb = state.b*(3*state.b-1);
	const cc = state.c*(3*state.c-1);
	const dd = state.d*(3*state.d-1);
	state.f1 = cc/aa - bb/aa;
	state.f2 = dd/bb - cc/bb;
}

function skip_until(state) {
	// display_state(state, "SKIP ");
	if(state.f1 > 1) {
		state.a++;
		state.b = state.a+1;
		state.c = state.a+2;
		state.d = state.a+3;
		enrich_state(state);
		skip_until(state);
	}
}

function optimize_f1(state) {
	// console.log("OPTF1", state);
	while(state.f1 < 1) {
		state.b++;
		state.c++;
		state.d = state.c+1;
		enrich_state(state);
	}
	if(state.f1 == 1) {
		// display_state(state, "     F1==1");
	} else {
		// display_state(state, "     F1>>1");
	}
}

function optimize_f2(state) {
	if(state.f1 > 1) return;
	while(state.f2 < 1) {
		state.d++;
		enrich_state(state);
	}
	// display_state(state, "     F2>=1");
	if(state.f2 == 1) {
		display_state(state, ">>>>>FOUND");
	} else {
		state.a++;
		state.b = state.a+1;
		state.c = state.a+2;
		state.d = state.a+3;
		enrich_state(state);
		// console.log("CONTINUE with a =", state.a);
	}
}

for(let i=0; i<70000; i++) {
	skip_until(state);
	optimize_f1(state);
	optimize_f2(state);
	if(state.f2 == 1) console.log(">".repeat(79));
}
