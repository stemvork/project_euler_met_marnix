def digit_power_sum(n=4):
    result = []
    for i in range(2, pow(10, n+1)):
        ints = [int(a) for a in str(i)]
        pow_sum = 0
        for j in ints:
            pow_sum += pow(j, n)
        if pow_sum == i:
            result.append(i)
    return result

print(sum(digit_power_sum(5)))
