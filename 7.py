import math
import numpy as np
from functools import lru_cache

def sieve(n):
    if n < 2:
        return []
    
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False # 0 en 1 zijn geen priemgetallen
    
    for i in range(2, int(math.sqrt(n)) + 1):
        if primes[i]:
            for j in range(i*i, n + 1, i):
                primes[j] = False
    return [i for i, prime in enumerate(primes) if prime]

def next_prime(above, primes):
    if(primes[-1] >= above): 
        return False
    
@lru_cache(maxsize=None)
def factorial(n):
    return n * factorial(n-1) if n else 1

print(factorial(10))
print(factorial(5))
print(factorial(12))

