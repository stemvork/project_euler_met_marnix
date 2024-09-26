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

primes = zeef_van_eratosthenes(2000000)
print(primes[10000])

