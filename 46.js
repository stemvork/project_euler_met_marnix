let max = 1e6
let oddComposite = new Array(max).fill(false);
// console.log(oddComposite);
for(var i = 3; i < max; i+= 2){
    for(var j = 3; j * i < max; j+= 2){
        // if(i == j){
        //     continue;
        // }
        oddComposite[i * j] = true;
        // console.log(i * j);
        // console.log(j);
    }
    // console.log(i);
}

console.log(oddComposite);

let isPrime = new Array(max).fill(true);
//eliminate all non-primes:
for(var i = 2; i < max; i++){
    for(var j = 2; j * i < max; j++){
        isPrime[i * j] = false;
    }
}
console.log(oddComposite[58])

let stop = false;
for(var i = 35; !stop; i++){
    let conjectureFound = false;
    if(!oddComposite[i]){
        continue;
    }
    for(var j = 1; j * j < i; j++){
        if(isPrime[i - j * j]){
            conjectureFound = true;
            break;
        }
        // if(j * j === i){
        //     stop = true;
        //     console.log(i);
        //     break;
        // }
    }
    if(!conjectureFound){
        stop = true;
        console.log(i);
        break;
    }
}
