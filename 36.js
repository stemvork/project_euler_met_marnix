function bin2dec(n){
    return n.toString(2);
}

function isPalindrome(n){
    //n is string
    if(n[0] === "0"){
        return false;
    }
    return n.split("").reverse().join("") === n;
}

let nums = [];
let sum = 0;

for(var i = 0; i< 1e6; i++){
    if(isPalindrome(i.toString()) && isPalindrome(bin2dec(i))){
        nums.push(i);
        sum += i;
    }
}

console.log(sum);
console.log(nums);