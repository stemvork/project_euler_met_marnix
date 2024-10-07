var isPrime = new Array(1e6).fill(true);
//eliminate all non-primes:
for(var i = 2; i < 1e6; i++){
    for(var j = 2; j * i < 1e6; j++){
        isPrime[i * j] = false;
    }
}
isPrime[1] = false;
isPrime[0] = false;

let truncatablePrimes = [];
let max = 1e6 //through trial and error, it can be found that 1e6 is large enough to produce all 11 truncatable primes.
for(var i = 0; i <= max; i++){
    if(!isPrime[i]) continue;
    let digits1 = i.toString().split("").map(x => Number(x));
    if(digits1.length < 2){
        continue;
    }
    let chopLeft = true;
    let chopRight = true;
    // console.log("-".repeat(50));
    // console.log(digits1);
    while(digits1.length > 1){
        // console.log(digits1);
        digits1 = digits1.slice(1);
        // console.log(digits1);
        if(!isPrime[Number(digits1.join(""))]){
            chopLeft = false;
            // console.log(Number(digits1.join("")), digits1);
            break;
        }
        // console.log(digits1);
    }
    let digits2 = i.toString().split("").map(x => Number(x));
    // console.log(digits2);
    while(digits2.length > 1){
        digits2 = digits2.slice(0,digits2.length - 1);
        // console.log(digits2);
        if(!isPrime[Number(digits2.join(""))]){
            chopRight = false;
            // console.log(Number(digits2.join("")))
            break;
        }
    }
    // console.log(chopLeft, chopRight);
    if(chopLeft && chopRight){
        truncatablePrimes.push(i);
    }
}

console.log(truncatablePrimes);
console.log(truncatablePrimes.reduce((a, b) => a + b, 0));