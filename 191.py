def count_prize_strings(n):
    dp = [[[0] * 2 for _ in range(3)] for __ in range(n+1)]
    dp[0][0][0] = 1

    for i in range(n):
        for j in range(3):
            for k in range(2):
                if dp[i][j][k] == 0:
                    continue
                dp[i+1][0][k] += dp[i][j][k]
                if j < 2:
                    dp[i+1][j+1][k] += dp[i][j][k]
                if k == 0:
                    dp[i+1][0][k+1] += dp[i][j][k]
    total = sum(dp[n][j][k] for j in range(3) for k in range(2))
    return total 

assert count_prize_strings(4) == 43
print(count_prize_strings(30))
