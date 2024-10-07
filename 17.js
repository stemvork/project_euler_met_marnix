const words = {
	0: "",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
}

const t_words = {
	0: "",
	1: "ten",
	2: "twenty",
	3: "thirty",
	4: "forty",
	5: "fifty",
	6: "sixty",
	7: "seventy",
	8: "eighty",
	9: "ninety",
}

const tt_words = {
	0: "ten",
	1: "eleven",
	2: "twelve",
	3: "thirteen",
	4: "fourteen",
	5: "fifteen",
	6: "sixteen",
	7: "seventeen",
	8: "eighteen",
	9: "nineteen",
};

function numberWord(n) {
	const hundreds = Math.floor(n/100);
	const tens = Math.floor((n%100)/10);
	const units = n%10;
	if(n === 1000) return "one thousand";
	if(tens === 1 && hundreds === 0) return tt_words[units];
	if(tens === 1) return `${words[hundreds]} hundred and ${tt_words[units]}`;
	if(units === 0 && tens === 0) return `${words[hundreds]} hundred`;
	if(hundreds === 0) return `${t_words[tens]} ${words[units]}`;
	if(hundreds > 0) return `${words[hundreds]} hundred and ${t_words[tens]} ${words[units]}`;
	return `${t_words[tens]} ${words[units]}`;
}

function getLetterLength(n) {
	const word = numberWord(n);
	// console.log(n, word);
	const f_word = word.split('').filter(x => x !== " " && x !== "-").join("");
	console.log(n, f_word.length, f_word);
	return f_word.length;
}

//console.log(getLetterLength(342));
//console.log(getLetterLength(115));

let total = 0;
for(let i=1; i<=1000; i++) {
	total += getLetterLength(i);
}
console.log(`Total: ${total}`);
