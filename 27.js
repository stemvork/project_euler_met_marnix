// pseudo code (bruteforce, depends on is_prime)
// the coefficient search space is 4 000 000 combinations
// very sparse: the number of primes is low for many quadratics
// TODO: what would be an optimisation
//
// let largest = (0, 0, 0)
// for a in range -1000 to 1000:
//	for b in range -1000 to 1000:
//		quadratic = n ** 2 + a * n + b
//		let n = 0
//		while(is_prime(quadratic(n))):
//			n++
//		if n-1 > largest[0]:
//			largest = (n-1, a, b)
// print(a * b)
