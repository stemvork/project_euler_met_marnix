let knownNumbers = [];

for(var a = 2n; a <= 100n; a++){
    for(var b = 2n; b <= 100n; b++){
        let thisNumber = a ** b;
        if(!knownNumbers.includes(thisNumber)){
            knownNumbers.push(thisNumber);
        }
    }
}
console.log(knownNumbers.length);

