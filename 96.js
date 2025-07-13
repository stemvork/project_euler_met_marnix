// Sudoku solver
import * as fs from 'node:fs';
const data = fs.readFileSync('./96.txt', 'utf-8').trim();

const blocks = [
    [[0,0], [1,0], [2,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2]],
    [[0,3], [1,3], [2,3], [0,4], [1,4], [2,4], [0,5], [1,5], [2,5]],
    [[0,6], [1,6], [2,6], [0,7], [1,7], [2,7], [0,8], [1,8], [2,8]],
    [[3,0], [4,0], [5,0], [3,1], [4,1], [5,1], [3,2], [4,2], [5,2]],
    [[3,3], [4,3], [5,3], [3,4], [4,4], [5,4], [3,5], [4,5], [5,5]],
    [[3,6], [4,6], [5,6], [3,7], [4,7], [5,7], [3,8], [4,8], [5,8]],
    [[6,0], [7,0], [8,0], [6,1], [7,1], [8,1], [6,2], [7,2], [8,2]],
    [[6,3], [7,3], [8,3], [6,4], [7,4], [8,4], [6,5], [7,5], [8,5]],
    [[6,6], [7,6], [8,6], [6,7], [7,7], [8,7], [6,8], [7,8], [8,8]],
];
const rows = [
    [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0]],
    [[0,1], [1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1]],
    [[0,2], [1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2]],
    [[0,3], [1,3], [2,3], [3,3], [4,3], [5,3], [6,3], [7,3], [8,3]],
    [[0,4], [1,4], [2,4], [3,4], [4,4], [5,4], [6,4], [7,4], [8,4]],
    [[0,5], [1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5], [8,5]],
    [[0,6], [1,6], [2,6], [3,6], [4,6], [5,6], [6,6], [7,6], [8,6]],
    [[0,7], [1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7]],
    [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8], [8,8]],
];
const cols = [
    [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8]],
    [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8]],
    [[2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8]],
    [[3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8]],
    [[4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8]],
    [[5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8]],
    [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8]],
    [[7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8]],
    [[8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8]],
];

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

function sweep(grid) {
    for(let i=0; i<9; i++) { complete_block(grid, i); }
    for(let i=0; i<9; i++) { complete_row(grid, i); }
    for(let i=0; i<9; i++) { complete_col(grid, i); }
}
sweep(grids[1]);

function complete_block(grid, i) {
    const numbers = [];
    for(const [c, r] of blocks[i]) {
	numbers.push([grid[r][c], c, r]);
    }
    if(numbers.filter(x => x[0] !== "0").length > 1) return;
    const sum = numbers.map(x => parseInt(x[0])).reduce((a, b) => a + b, 0);
    const entry = (45 - sum).toString();
    const [c, r] = numbers.filter(x => x[0] === "0")[0].slice(1);
    grid[r][c] = entry;
    console.log("subbed", [c, r], "with", entry, "because sum is", sum);
}
function complete_row(grid, i) {
    const numbers = [];
    for(const [c, r] of rows[i]) {
	numbers.push([grid[r][c], c, r]);
    }
    if(numbers.filter(x => x[0] !== "0").length > 1) return;
    const sum = numbers.map(x => parseInt(x[0])).reduce((a, b) => a + b, 0);
    const entry = (45 - sum).toString();
    const [c, r] = numbers.filter(x => x[0] === "0")[0].slice(1);
    grid[r][c] = entry;
    console.log("subbed", [c, r], "with", entry, "because sum is", sum);
}
function complete_col(grid, i) {
    const numbers = [];
    for(const [c, r] of cols[i]) {
	numbers.push([grid[r][c], c, r]);
    }
    if(numbers.filter(x => x[0] !== "0").length !== 1) return;
    const sum = numbers.map(x => parseInt(x[0])).reduce((a, b) => a + b, 0);
    const entry = (45 - sum).toString();
    const [c, r] = numbers.filter(x => x[0] === "0")[0].slice(1);
    grid[r][c] = entry;
    console.log("subbed", [c, r], "with", entry, "because sum is", sum);
}
