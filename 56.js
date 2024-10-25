function getDigitSum(n){
    return n.toString().split("").map(Number).reduce((a, b) => a + b);
}


let largest = 0n;
for(var a = 1n; a < 100n; a++){
    for(var b = 1n; b < 100n; b++){
        let a_b = getDigitSum(a**b);
        if(a_b > largest){
            largest = a_b;
        }
    }
}

console.log(largest);