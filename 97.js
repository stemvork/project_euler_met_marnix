function getArrayOfDigitsOfPowerOf2(n){ //returns a REVERSED array of digits
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
        //now, we are only interested in the last 10 digits:
        if(digits.length > 10){
            digits.pop();
        }
    }
    return digits
}

// console.log(getArrayOfDigitsOfPowerOf2(7830457));
let answer = BigInt(Number(getArrayOfDigitsOfPowerOf2(7830457).reverse().join(""))) * BigInt(28433) + BigInt(1);
console.log(answer); //ignore the 'n' at the end and take the last 10 digits