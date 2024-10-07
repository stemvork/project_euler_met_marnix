//10^n always has n + 1 digits, so 1 <= base <= 9.
let startTime = performance.now();
let max = 22; //by trial and error, it can be found that this works until 22. Higher values give the same output, but take more time to compute.
let count = 0;
for(let i = 0; i < max; i++){
    for(let j = 1; j < 10; j++){
        if(new String(j**i).split("").length === i){
            count++;
        }
    }
}
let endTime = performance.now();
console.log(count);
console.log(`max = ${max} => program took ${endTime - startTime} ms.`)