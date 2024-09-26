visited = {}

# @lru_cache
def collatz(x, l=1):
    if x == 1:
        return l

    if x % 2 == 0:
        return collatz(x/2, l+1)

    else:
        return collatz(3*x+1, l+1)

largest = 0

for i in range(1, 1000000):
    result = collatz(i)
    if result > largest:
        largest = result
        print(i, result)

print(f"Largest: {largest}")
