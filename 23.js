//this program takes about a minute to run

let abundantNumbers = [];

//check for every i if it is an abundant number:
let max = 28123;
// let max = 16;
for(var i = 0; i < max; i += 2 /*only even numbers can be abundant*/){
    //generate all proper divisors:
    let sqrtI = Math.floor(Math.sqrt(i))
    let thisProperDivisors = [];
    for(var j = i - 1; j > 0; j--){
        if((i / j) % 1 == 0){
            thisProperDivisors.push(j);
        }
    }
    // console.log(i, thisProperDivisors);
    if(thisProperDivisors.reduce((a, b) => a + b, 0) > i){
        abundantNumbers.push(i);
    }
}

console.log(abundantNumbers);
let qualifingNumbers = [];
for(var i = 1; i < 28123; i += i > 22 ? 2 : 1){
    // console.log(qualifingNumbers);
    // console.log(i);
    let addNumber = false;
    for(var j = 0; j < .5 * i + 1; j++){
        if(abundantNumbers.includes(i - abundantNumbers[j])){
            addNumber = true;
            break;
        }
        // if(j == .5 * i){
        //     console.log("reached end");
        //     console.log(addNumber);
        //     break;
        // }
    }
    if(!addNumber){
        qualifingNumbers.push(i);
    }
}
console.log(qualifingNumbers);
let result = qualifingNumbers.reduce((a, b) => a + b, 0);
console.log(result);