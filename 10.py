# sum of primes below 10
# 2 + 3 + 5 + 7 = 13

# task: find the sum of all the primes below two million

# bron: https://docs.google.com/document/d/1QTnH7wxlWcO4bTdjeSOEpe8kYk4jw5zjQN2NlgZQtxg/edit

import math
def zeef_van_eratosthenes(n): # genereert priemgetallen tot en met n
    n = int(n)
    if n < 2:
        return []

    # Maak een lijst met booleans en initialiseer alle waarden op True
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False  # 0 en 1 zijn geen priemgetallen

    for i in range(2, int(math.sqrt(n)) + 1):
        if primes[i]:
            # Zet alle veelvouden van i op False
            for j in range(i*i, n + 1, i):
                primes[j] = False

    # Genereer de lijst van priemgetallen
    return [i for i, prime in enumerate(primes) if prime]

print(sum(zeef_van_eratosthenes(2e6)))

