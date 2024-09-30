def factorial(n):
    if n == 2: return 2
    return n*factorial(n-1)

print(sum([int(a) for a in str(factorial(100))]))
