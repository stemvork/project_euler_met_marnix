// Sudoku solver
import * as fs from 'node:fs';
const data = fs.readFileSync('./96.txt', 'utf-8').trim();
function parse_data(data) {
    const grids = {};
    let grid = [];
    let index = 0;
    for(const line of data.split('\n')) {
	if(line[0] === 'G') {
	    if(grid.length === 9) grids[index] = grid;
	    grid = [];
	    index = parseInt(line.split('Grid ')[1]);
	} else {
	    grid.push(line.split('').map(x => parseInt(x)));
	}
    }
    grids[index] = grid;
    return grids;
}
const grids = parse_data(data);
console.table(grids[1]);

function transpose(matrix) { return matrix[0].map((_, ci) => matrix.map(r => r[ci])); }

function is_valid(grid, row, col, num) {
    for(let i=0; i<9; i++) {
        if(grid[row][i] === num || grid[i][col] === num) return false;
    }
    const br = Math.floor(row/3) * 3;
    const bc = Math.floor(col/3) * 3;
    for(let i=0; i<3; i++) { 
        for(let j=0; j<3; j++) { 
	    if(grid[br+i][bc+j] === num) return false;
	}
    }
    return true;
}

function solve(grid) {
    for(let row=0; row<9; row++) {
	for(let col=0; col<9; col++) {
	    if(grid[row][col] === 0) {
		for(let num=1; num<=9; num++) {
		    if(is_valid(grid, row, col, num)) {
			grid[row][col] = num;
			if(solve(grid)) return true;
			grid[row][col] = 0; // backtrack
                    }
		}
		return false;
            }
	}
    }
    return true;
}
for(const grid of Object.values(grids)) {
    solve(grid);
    console.table(grid);
}

console.log(Object.values(grids).map(g => g[0][0]*100+g[0][1]*10+g[0][2]).reduce((a, b) => a + b, 0));
