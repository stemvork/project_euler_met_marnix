function getRecurringDigits(n){
    let stop = false;
    //decimal digits:
    let digits = [0];
    let remainder = 10;
    let previousRemainders = [remainder];
    let result = null
    for(var i = 0; result == null; i++){
        let add = Math.floor(remainder/n);
        remainder = (remainder - add * n) * 10;
        digits[i] = add;
        if(i > 6){
            stop = true;
        }
        //check if this is the start of a pattern we have seen before:
        for(var j = 0; j < i; j++){
            //to be part of the same pattern, both the digit and the remainder have to correspond:
            if(previousRemainders[i] == previousRemainders[j] && digits[j] == digits[i]){
                result = i - j;
            }
        }
        previousRemainders[i + 1] = remainder
    }
    return result;
}

let highest = 0;
let highestD = 1;
for(var i = 1; i < 1000; i++){
    let current = getRecurringDigits(i);
    if(current > highest){
        highest = current;
        highestD = i;
    }
}

console.log(`Answer to day 26: ${highestD}`);
