import * as $C from 'https://cdn.jsdelivr.net/npm/js-combinatorics@2.1.2/combinatorics.min.js';

import * as fs from 'node:fs';
const words = fs.readFileSync('./98.txt', 'utf-8').trim()
    .replaceAll('"', '').split(',');;
console.assert(words[0] === "A");
console.assert(words.length === 1786);

function word_to_number(word) {
    return 0;
}

const word = "CARE";
function is_anagram_pair(a, b) {
    return a.split('').sort().join("") === b.split('').sort().join("");
}
console.assert(is_anagram_pair("CARE", "RACE"));

function filter_pairs(words) {
    const product_set = [];
    for(let i=0; i<words.length; i++) {
        for(let j=i+1; j<words.length; j++) {
            product_set.push([words[i], words[j]]);
        }
    }
    console.assert(product_set.length === 1594005);
    return product_set.filter(([a, b]) => is_anagram_pair(a, b));
}
const anagram_pairs = filter_pairs(words);
console.assert(anagram_pairs.length === 44);

const anagram_pair_sort = (reverse=false) => (a, b) => { 
    return (a[0].length - b[0].length) * (reverse ? -1 : 1)
}
console.assert(anagram_pairs.sort(anagram_pair_sort())[0][0].length === 2);
console.assert(anagram_pairs.sort(anagram_pair_sort(true))[0][0].length === 9);
console.assert(anagram_pairs.sort(anagram_pair_sort(true))[1][0].length === 8);
//console.log(anagram_pairs);
// NOTE: the longest word does not necessarily have the largest square
// i.e. INTRODUCE(9) could be smaller than AAPAAPAP(8)
// NOTE: we checked that none of the anagram pairs are palindromes

function candidate_squares(word) {
    const l = word.length;
    // because 111**2 has less than 6 digits and at most 999**2 has 6 digits
    // better lower bound = ceil(sqrt(1e6));
    // base case ON / NO -> 2 digits -> squares: 16, 25, 36, 49, 64, 81
    const lower = Math.ceil(Math.sqrt(10**l)); 
    const upper = 10**l-1;
    // console.log(lower, upper);
}
//console.assert(candidate_squares("ON") === [10, 99]);

const get_unique_char_count = (word) => Array.from(new Set(word.split(''))).join("").length;
console.assert(get_unique_char_count("CARE") === 4);

function is_square(word) {
    const candidates = Array(10).fill(null).map((x, i) => i);
    const n = get_unique_char_count(word);
    for(const x of new $C.Permutation(candidates, n)) {
        // if(x[0] !== 0) console.log(x);
        // TODO: assign these numbers to the word and the permutation(!) and check that both numbers are square
    }
    return false;
}
console.log(is_square("CARE"));
