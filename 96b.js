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
	    grid.push(line.split(''));
	}
    }
    //console.log(grids[1]);
    return grids;
}
const grids = parse_data(data);
// console.log(grids[1]);

function transpose(matrix) { return matrix[0].map((_, ci) => matrix.map(r => r[ci])); }
function fill_by_block(grid, r, c) {
    const leftupper = [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]];
    const bj = Math.floor(r/3)*3;
    const bi = Math.floor(c/3)*3;
    const entries = leftupper.map(([r, c]) => grid[r+bj][c+bi]);
    const unique = new Set(entries.flat());
    console.log('entries in block at', r, c, 'are', unique);
    if(unique.size === 8) {
	grid[r][c] = Array.from((new Set("123456789".split(""))).difference(unique))[0];
	console.log('replaced at', r, c, 'with', grid[r][c]);
	return true;
    }
    return false;
}
function fill_by_col(grid, r, c) {
    const entries = transpose(grid)[c];
    const unique = new Set(entries.flat());
    console.log('entries in col at', r, c, 'are', unique);
    if(unique.size === 8) {
	grid[r][c] = Array.from((new Set("123456789".split(""))).difference(unique))[0];
	console.log('replaced at', r, c, 'with', grid[r][c]);
	return true;
    }
}
function fill_by_row(grid, r, c) {
    const entries = grid[r]
    const unique = new Set(entries.flat());
    console.log('entries in row at', r, c, 'are', unique);
    if(unique.size === 8) {
	grid[r][c] = Array.from((new Set("123456789".split(""))).difference(unique))[0];
	console.log('replaced at', r, c, 'with', grid[r][c]);
	return true;
    }
}
function replace_zeroes_by_candidates_or_entry(grid) {
    for(let i=0; i<9; i++) {
	for(let j=0; j<9; j++) {
	    if(grid[j][i] === "0") {
		if(fill_by_block(grid, j, i)) continue;
		if(fill_by_row(grid, j, i)) continue;
		if(fill_by_col(grid, j, i)) continue;
	    }
	}
    }
    console.log('zeroes left:', grid.flat().filter(x => x === "0").length);
    return grid;
}
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
replace_zeroes_by_candidates_or_entry(grids[1]);
console.log(grids[1]);
