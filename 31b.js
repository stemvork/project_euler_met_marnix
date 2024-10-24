//function solution(target) {
//  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
//  var table = new Uint32Array(target + 1);
//  table[0] = 1;
//  for (var i = 0; i < coins.length; i++) {
//    for (var j = coins[i]; j <= target; j++) {
//      table[j]+= table[j - coins[i]];
//    }
//  }
//  return table[target];
//}
function solution(target) {
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var table = new Array(target + 1);
  for (var i = 0; i <= target; i++) {
    table[i] = new Array(coins.length);
    table[i][0] = 1;
  }

  for (var i = 0; i <= target; i++) {
    for (var j = 1; j < coins.length; j++) {
      table[i][j] = table[i][j - 1];
      if (coins[j] <= i)
        table[i][j]+= table[i - coins[j]][j];
    }
  }
  return table[i-1][j-1];
}
console.log(solution(200));
