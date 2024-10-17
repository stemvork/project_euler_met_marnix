//for any nth square (n = 0 for the middle), the sum of its corners is 4(2n + 1)^2 - 12n

//2n + 1 = 1001
// n = 500 squares
let sum = 1; //the middle (1) can't be calculated using our formula
for(var i = 1; i <= 500; i++){
    sum += 4*((2*i + 1)**2) - 12*i;
}
console.log(sum)