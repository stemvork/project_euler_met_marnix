let knownFactorials = [];

function factorial(n){
    if(knownFactorials[n]){
        // console.log(n);
        return knownFactorials[n];
    }
    let product = 1;
    for(var i = 2; i <= n; i++){
        product *= i
    }
    knownFactorials[n] = product;
    return product;
}


function getSumOfDigitFactorials(n){
    let digits = n.toString().split("").map(x => Number(x));
    let sum = 0;
    for(let digit of digits){
        sum += factorial(digit);
    }
    return sum;
}

let nums = [];
for(var i = 3; i < 1e7; i++){
    if(getSumOfDigitFactorials(i) === i){
        nums.push(i);
    }
    if(i % 1e6 == 0){
        console.log(i);
    }
}

console.log(nums);