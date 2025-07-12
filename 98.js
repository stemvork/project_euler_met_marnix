import * as $C from 'https://cdn.jsdelivr.net/npm/js-combinatorics@2.1.2/combinatorics.min.js';

import * as fs from 'node:fs';
const words = fs.readFileSync('./98.txt', 'utf-8').trim().replaceAll('"', '').split(',');;
console.assert(words[0] === "A");
console.assert(words.length === 1786);

const word = "CARE";
function is_anagram_pair(a, b) { return a.split('').sort().join("") === b.split('').sort().join(""); }
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

const anagram_pair_sort = (reverse=false) => (a, b) => { return (a[0].length - b[0].length) * (reverse ? -1 : 1) }
console.assert(anagram_pairs.sort(anagram_pair_sort())[0][0].length === 2);
console.assert(anagram_pairs.sort(anagram_pair_sort(true))[0][0].length === 9);
console.assert(anagram_pairs.sort(anagram_pair_sort(true))[1][0].length === 8);
// console.log(anagram_pairs);
// NOTE: the longest word does not necessarily have the largest square
// i.e. INTRODUCE(9) could be smaller than AAPAAPAP(8)
// NOTE: we checked that none of the anagram pairs are palindromes

// FIX: Deprecated?
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

const get_unique_chars = (word) => Array.from(new Set(word.split(''))).join("");
const get_unique_char_count = (word) => get_unique_chars(word).length;
console.assert(get_unique_chars("CARE").length === 4);

const get_iterator_and_unique_chars = (word) => {
    const candidates = Array(10).fill(null).map((x, i) => i);
    const unique_chars = get_unique_chars(word);
    const it = new $C.Permutation(candidates, unique_chars.length);
    return [it, unique_chars];
}

// INFO: returns NaN if anagram starts with zero
function get_number_from_mapping(word, mapping) {
    const letters = word.split('');
    const number_chars = letters.map((c, ci) => {
            const starts_with_zero = ci === 0 && mapping[c] === 0;
            if(starts_with_zero) return false;

            return mapping[c];
    });
    return parseInt(number_chars.join(""));
}
function get_max_square(a, b) {
    const [it, unique_chars] = get_iterator_and_unique_chars(a);
    const letters_a = unique_chars.split('');

    const mappings = [];
    for(const x of it) {
        // DONE: assign these numbers to the word and the permutation(!) and check that both numbers are square
        // INFO: skip if first digit is zero, if not square
        if(x[0] === 0) continue;

        const y = parseInt(x.join(""));
        const is_square_a = y - Math.round(Math.sqrt(y))**2 === 0;
        if(!is_square_a) continue;

        const mapping = Object.fromEntries(letters_a.map((l, li) => [l, x[li]]));
        const number_b = get_number_from_mapping(b, mapping);
        const is_square_b = number_b - Math.round(Math.sqrt(number_b))**2 === 0;
        if(!is_square_b) continue;

        mappings.push([y, number_b]);
    }
    return Math.max(...(mappings.flat()));
}
console.assert(get_max_square("CARE", "RACE") === 9216);

let max = 0;
// TODO: maybe max-reduce reads nicer?
for(const [a, b] of anagram_pairs) {
    const s = get_max_square(a, b);
    if(s > max) max = s;
}
console.log(max);
