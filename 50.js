let isPrime = new Array(1e6).fill(true);

for(var i = 2; i < 1e6; i++){
    for(var j = 2; j * i < 1e6; j++){
        isPrime[i * j] = false;
    }
}

let primes = [];
isPrime.forEach((x, i) => {
    if(x) primes.push(i);
})
primes.shift(); //remove lead zero
console.log(primes);


let largestSum = 0;;
for(var i = 0; i < 10; i++){
    let sum = primes[i];
    for(var j = i + 1; j < primes.length; j++){
        sum += primes[j];
        if(isPrime[sum] && sum > largestSum){
            largestSum = sum;
        }
    }
}
console.log(largestSum);