//not so efficient implementation, takes about a second.
function inefficientImplementation(){
    let digits = [];
    for(var i = 1; i < 1_000_001; i++){
        let addDigits = new String(i).split("").map(x => Number(x));
        digits.push(...addDigits);
    }

    let product = 1;
    for(var i = 1; i < 1_000_001; i *= 10){
        product *= digits[i - 1];
    }

    console.log(product);
}

//let's try to make it faster:

function moreEfficientAttempt(){
    let product = 1;
    let totalDigitsFound = 0;
    let lastCeilTDFlog10 = -Infinity;
    let thisCeilTDFlog10 = 0;
    for(var i = 1; totalDigitsFound < 1e6; i++){
        totalDigitsFound += Math.ceil(Math.log10(i + 1));
        thisCeilTDFlog10 = Math.ceil(Math.log10(totalDigitsFound + 1));

        if(thisCeilTDFlog10 > lastCeilTDFlog10){
            //reached next order of magnitude, multiply product by 10^nth digit
            let shiftLeft = totalDigitsFound - (10 ** Math.floor(Math.log10(totalDigitsFound)))
            let length = Math.ceil(Math.log10(i + 1))
            product *= new String(i).split("").map(x => Number(x))[length - 1 - shiftLeft];
        }

        lastCeilTDFlog10 = thisCeilTDFlog10;
    }
    console.log(product);
}

function evenMoreEfficientAttempt(){
    //difference with last function is that most logarithms are calculated 'manually' and discretely, since only integers are needed. This saves some time.
    let product = 1;
    let totalDigitsFound = 0;
    let lastCeilTDFlog10 = -Infinity;
    let thisCeilTDFlog10 = 0;
    for(var i = 1; totalDigitsFound < 1_000_000; i++){
        totalDigitsFound += ceilLog10(i + 1);
        thisCeilTDFlog10 = ceilLog10(totalDigitsFound + 1);

        if(thisCeilTDFlog10 > lastCeilTDFlog10){
            //reached next order of magnitude, multiply product by 10^nth digit
            let shiftLeft = totalDigitsFound - (10 ** Math.floor(Math.log10(totalDigitsFound)))
            let length = ceilLog10(i + 1);
            product *= new String(i).split("").map(x => Number(x))[length - 1 - shiftLeft];
        }
        lastCeilTDFlog10 = thisCeilTDFlog10;
    }
    console.log(product);
}


//this algorithm is 50x faster for the challenge (until 10^6) than the first efficient implementation, and about 150.000x faster when going until 10^10
function evenMoreEfficientAttempt2(){
    //difference with last function is that many numbers in between of orders of magnitude are skipped, there is no need to calculate them.
    let product = 1;
    let totalDigitsFound = 0;
    let lastCeilTDFlog10 = -Infinity;
    let thisCeilTDFlog10 = 0;
    for(var i = 1; totalDigitsFound < 1e6; i++){
        totalDigitsFound += ceilLog10(i + 1);
        thisCeilTDFlog10 = ceilLog10(totalDigitsFound + 1);

        if(thisCeilTDFlog10 > lastCeilTDFlog10){
            //reached next order of magnitude, multiply product by 10^nth digit
            let shiftLeft = totalDigitsFound - (10 ** Math.floor(Math.log10(totalDigitsFound)))
            let length = ceilLog10(i + 1);
            product *= new String(i).split("").map(x => Number(x))[length - 1 - shiftLeft];
        }
        lastCeilTDFlog10 = thisCeilTDFlog10;

        //check if we can skip some numbers:
        let leftUntilNextOrderOf10i = powerOf10(ceilLog10(i)) - i - 1;
        let leftUntilNextOrderOf10TDF = Math.floor((powerOf10(ceilLog10(totalDigitsFound)) - totalDigitsFound)/ceilLog10(i + 1)) - 1;
        //only skip to the closest next order of magnitude:
        let skipSteps = Math.min(leftUntilNextOrderOf10i, leftUntilNextOrderOf10TDF);
        if(skipSteps < 0){
            skipSteps = 0;
        }
        i += skipSteps;
        totalDigitsFound += skipSteps * ceilLog10(i);
    }
    console.log(product);
}

function ceilLog10(n){
    let i = 0;
    while(n > powerOf10(i)){
        i++
    }
    return i;
}

function powerOf10(n){
    let returnValue = 1;
    for(var i = 0; i < n; i++){
        returnValue *= 10;
    }
    return returnValue;
}

let startTime = performance.now();
moreEfficientAttempt();
let efficientTime = performance.now();
evenMoreEfficientAttempt();
let evenMoreEfficientTime = performance.now();
evenMoreEfficientAttempt2();
let evenMoreEfficientTime2 = performance.now();
inefficientImplementation();
let inefficientTime = performance.now();
console.log(`'Efficient' approach took ${efficientTime - startTime} ms.`,
     `\n`,
     `'Even more efficient' approach took ${evenMoreEfficientTime - efficientTime} ms.`,
     `\n`,
     `'Even more efficient (2)' approach took ${evenMoreEfficientTime2 - evenMoreEfficientTime} ms.`,
     `\n`,
      `Inefficient approach took ${inefficientTime - evenMoreEfficientTime2} ms.`)
