# d(n) sum of proper divisors of n
# proper divisor is a number less which divides n evenly

# if d(a) = b and d(b) = a and a != b, then a and b are an amicable pair
# and each of a and b are amicable numbers

# proper divisors 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110
# therefore d(220) = 284

# the proper divisors of 284 are 1, 2, 4, 71, 142
# so d(284) = 220

# TASK: evaluate the sum of all the amicable numbers under 10 000

def divisors(n):
    divs = []
    for i in range(1, n//2+1):
        if n % i == 0:
            divs.append(i)

    return divs
# print(sum(divisors(220)))

divsums = dict()
pairs = set()
for i in range(1, 10000):
    divsums[i] = sum(divisors(i))
# print(divsums[220])

for i in range(2, 10000):
    j = divsums[i]
    if i >= j or j > 10000: continue
    if divsums[j] == i:
        pairs.add((i, j))
print(sum([a + b for (a, b) in pairs]))
