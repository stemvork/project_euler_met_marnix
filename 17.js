


let numberToString = {
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
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand"
}

function getAmountOfChars(n){
    let digits = n.toString().split("").map(x => Number(x)).reverse(); //lowest orders of magnitude up front
    let length = 0;

    for(var i = 0; i < digits.length; i++){
        if(i == 0){
            length += numberToString[digits[i]].length;
        } else if(i == 1){
            length += numberToString[digits[i] * 10].length;
            if(digits[1] == 1){
                //11-19 are special cases
                length = 0;
                length += numberToString[10 + digits[0]].length;
            }
        } else if(i == 2){
            if(digits[0] > 0 || digits[1] > 0){
                length += 3 //'and' is put in between.
            }
            if(digits[2] > 0){
                length += numberToString[digits[i]].length + numberToString[100].length;
            }
        } else if(i == 3){
            if(digits[3] > 0){
                length += numberToString[1000].length + 3;
            }
        }
    }
    return length;
}

let sum = 0;
for(var i = 1; i <= 1000; i++){
    sum += getAmountOfChars(i);
}

console.log(sum);
