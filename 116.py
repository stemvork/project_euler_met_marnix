from math import comb 
def ways_to_fill(length, n=2):
    blocks = length // n
    print(length, n, blocks)
    total = 0
    for b in range(1,blocks+1):
        bins = length - b*n + 1
        count = comb(b+bins-1,bins-1)
        total += count
        # print(length, b, n, ':', count, '>>', total)
    return total

assert ways_to_fill(4, 2) == 4
assert ways_to_fill(4, 3) == 2
assert ways_to_fill(4, 4) == 1

assert ways_to_fill(5, 2) == 7
assert ways_to_fill(5, 3) == 3
assert ways_to_fill(5, 4) == 2

assert ways_to_fill(6, 2) == 12
assert ways_to_fill(6, 3) == 5
assert ways_to_fill(6, 4) == 3

def ways_to_fill_rgb(length):
    return sum([ways_to_fill(length, x) for x in [2,3,4]])
print("solution:", ways_to_fill_rgb(50))
