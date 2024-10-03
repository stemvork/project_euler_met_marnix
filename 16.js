//sum of digits of 2^1000. JS can't handle this large of a number, so we calculate it using an array with its digits.

function getArrayOfDigitsOfPowerOf2(n){
    let digits = [1]; //for algoritmic purposes, the array is reversed (higher powers of digits are at the end of the array)
    let incrementNext1, incrementNext2 = false;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < digits.length; j++){
            digits[j] *= 2;

            if(digits[j] > 9){
                incrementNext2 = true;
                if(j == digits.length - 1){
                    digits.push(0);
                }
                digits[j] %= 10;
            } else {
                incrementNext2 = false;
            }

            if(incrementNext1){
                //we can only add the 10-remainder of the last digit after checking this digit for a 10-remainder:
                digits[j]++;
            };

            incrementNext1 = incrementNext2;
            incrementNext2 = false;
        }
    }
    return digits.reverse() //reverse the array back in the right order
}

console.log(getArrayOfDigitsOfPowerOf2(1000));
console.log(`Result of day 16: ${getArrayOfDigitsOfPowerOf2(1000).reduce((a, b) => a + b, 0)}`)