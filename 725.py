def d_sum(s): return sum([int(c) for c in s])
def is_ds(n): 
    ns = str(n)
    for i in range(len(ns)):
        other = ns[:i]+ns[i+1:]
        other_ds = d_sum(other)
        if other_ds == int(ns[i]): return True
    return False
assert is_ds(112) == True
assert is_ds(32812) == True

def S(n):
    result = 0
    for x in range(10**n):
        if is_ds(x): result += x
    return result
assert S(2) == 495
assert S(3) == 63270
# assert S(7) == 85499991450
