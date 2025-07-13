from sympy import *

amicable = lambda x: sum(divisors(x)[:-1]) 
assert amicable(220) == 284

state = {}
def lookup(x, chain=[], limit=int(1e6)):
    num = amicable(x)
    if(x > limit or num > limit): return None
    # print('looking up', x, 'with amicable', num, 'and with chain', chain)
    if(x == 0): return 0
    if len(chain) >= 1:
        if num in chain and num == chain[0]:
            return len(chain)+1
        elif num in chain:
            return None
        else:
            return lookup(num, [*chain, num])
    else:
        if num == x: return 1
        return lookup(num, [x])

assert lookup(28) == 1
assert lookup(220) == 2
assert lookup(12496) == 5

smallest_with_length = {}
for x in range(int(1e6)+1):
    chain_length = lookup(x)
    if chain_length is not None and chain_length > 1:
        if chain_length not in smallest_with_length:
            smallest_with_length[chain_length] = x
        else:
            smallest_with_length[chain_length] = min(x, smallest_with_length[chain_length])
        # print(f"{x}[{chain_length}]")
print(smallest_with_length)
