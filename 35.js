// class Prime{
//     isPrime;
//     value;
//     constructor(value){
//         this.isPrime = true;
//         this.value = value;
//     }
// }
var startTime = performance.now();
var isPrime = new Array(1e6).fill(true);
//eliminate all non-primes:
for(var i = 2; i < 1e6; i++){
    for(var j = 2; j * i < 1e6; j++){
        isPrime[i * j] = false;
    }
}

var endTime = performance.now();
console.log(endTime - startTime);

console.log(isPrime);
// console.log(isPrime.filter(x => x).length);

var count = 0;
for(var i = 2; i < 1e6; i++){
    if(!isPrime[i]){
        continue;
    }
    let digits = i.toString().split("").map(x => Number(x));
    for(var j = 0; j < digits.length; j++){
        let leadDigit = digits[0];
        for(var k = 0; k < digits.length - 1; k++){
            digits[k] = digits[k + 1];
        }
        digits[digits.length - 1] = leadDigit;
        if(!isPrime[Number(digits.join(""))]){
            // console.log(i);
            break;
        }
        if(Number(digits.join("")) === i){
            count++;
            // console.log(i);
            break;
        }
    }
}

console.log(count);