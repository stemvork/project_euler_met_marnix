# x^-1 + y^-1 = n^-1
# where x, y and n are positive integers

# for n=4 there are three solutions: (5,20,4); (6,12,4); (8,8,4)
# for which (minimal) n are there more than one-thousand solutions?

from sympy import *
def dphr(n):
    n2 = n**2
    divs = divisors(n2)
    return len(divs)//2+1
assert dphr(4) == 3

n = 4
divs = 3
while divs <= 1000:
    n += 1
    divs = dphr(n)
print(n)
