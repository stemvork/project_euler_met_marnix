//find the first fibonacci number containing over 1000 digits
const startTime = performance.now();
let l1 = [1];
let l2 = [1];

let firstFibOver1000 = null;


function toNum(n){
    return n == undefined ? 0 : n;
}

for(var i = 0; true; i++){
    let l3 = l1;
    let incrementNext1, incrementNext2 = false;

    //add the next power of 10-digit:
    if(l3[l3.length - 1] !== 0){
        l3.push(0);
    }
    if(l2[l2.length - 1] !== 0){
        l2.push(0);
    }
    for(var j = 0; j < l3.length; j++){
        l3[j] += toNum(l2[j]);

        if(l3[j] > 9){
            incrementNext2 = true;
            if(j == l3.length - 1){
                l3.push(0);
            }
            l3[j] %= 10;
        } else {
            incrementNext2 = false;
        }
        if(l3[j] > 9){
            console.log(`before, ${j} > 9`)
        }

        if(incrementNext1){
            //we can only add the 10-remainder of the last digit after checking this digit for a 10-remainder:
            if(l3[j] == 9){
                l3[j] = 0;
                incrementNext2 = true;
            } else {
                l3[j]++;
            };
        };

        incrementNext1 = incrementNext2;
        incrementNext2 = false;
    }
    l1 = l2;
    l2 = l3;
    if(l2[l2.length - 1] == 0){
        l2.pop();
    }
    if(l2.length > 1000){
        firstFibOver1000 = i - 2;
        break;
    }
}

const endTime = performance.now()


console.log(`the ${firstFibOver1000}th number is ${l2.reverse().join("")}`);
console.log(`finding ${firstFibOver1000} fibonacci numbers took ${endTime - startTime} ms.`)