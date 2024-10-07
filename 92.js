//this approach takes a few seconds:

let loopsTo = []; //for every index, this indicates if it is already known whether this number loops to 1 or 89 by storing 1 or 89 on that index.
for(var i = 1; i < 1e7; i++){
    let numbersInLoop = [i];
    for(var j = 0; true; j++){
        let nextNumber = numbersInLoop[j].toString().split("").map(x => Number(x)).reduce((a, b) => a + b*b, 0);
        numbersInLoop.push(nextNumber);
        if(loopsTo[nextNumber] !== undefined){
            nextNumber = loopsTo[nextNumber];
        }
        if(nextNumber == 1 || nextNumber == 89){
            numbersInLoop.forEach(x => loopsTo[x] = nextNumber);
            break;
        }
    }
}

console.log(loopsTo.slice(1));
console.log(loopsTo.filter(x => x == 89).length)
