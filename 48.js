
// function sumOfSelfPowers(n){
//     let digits = [0];
//     for(var i = 1; i <= n; i++){
//         let startingDigits = [...(new String(i).split("").map(x => Number(x)))];
//         let iterationDigits = startingDigits;
//         for(var j = 1; j < i; j++){
//             for(var k = 0; k < startingDigits.length; k++){
//                 for(var m = 0; m < iterationDigits.length; m++){
                    
//                 }
//             }
//         }
//         // console.log(newDigits);
//     }
// }

// sumOfSelfPowers(120);
let sum = 0n;
for(var i = 1n; i <= 1000n; i++){
    sum += i ** i;
}
console.log(sum); //just copty the last 10 digits, ignore the 'n' at the end.