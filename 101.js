/* Given the first _k_ terms of a sequence it is impossible to say with certainty the value of the next term. For the cubic numbers: 1, 8, 27, 64, 125, 216, ... we have the generating function u_n = n^3. 
 *
 * We define OP(k, n) to be the nth term of the optimum polynomial generating function for the first k terms of a sequence. This is an accurate polynomial for n \leq k and the potentially first incorrect term (FIT) will be OP(k, k+1), in which case we call it a bad OP (BOP).
 *
 * For the cubic function, given only the first term, we assume O(1, n) = u_1 = 1, ...
 *
 * Then, for two terms, we can give: 
 * O(2, n) = 7n - 6 = 1, 8, 15, ...
 * O(3, n) = 6n^2 - 11n + 6 = 1, 8, 27, 58, ...
 * O(4, n) = n^3 = 1, 8, 27, 64, ...
 *
 * Theory from Wikipedia:
 * Based on the points (x_0, y_0), (x_1, y_1), ..., (x_j, y_j), ..., (x_k, y_k) where no two x_j are the same, the Newton interpolation polynomial is a linear combination of Newton basis polynomials: N(x) = sum_{j=0}^k a_j * n_j(x) with the Newton basis polynomials defined as n_j(x) = product_{i=0}^{j-1} (x - x_i) for j > 0 and n_0(x) = 1.
 *
 * The coefficients a_j are defined as [y_0, ..., y_j] which is a notation for divided differences.
 *
 * e.g. N(x) = y_0 + (y_1-y_0)/(x_1-x_0) * (x - x_0) + ((y_2-y_1)/(x_2-x_1) -(y_1-y_0)/(x_1-x_0))/(x_2-x_0) * (x - x_0)(x - x_1) for k=2
 *
 * Exploring the example :
 * O(2, n) uses two terms (1, 8) to generate: 
 * 	P(1) = 7 - 6 = 1 => 
 * 
 * 	P(2) = 14 - 6 = 8
 * 	P(3) = 21 - 6 = 15 (BOP)
 *
 * O(3, n) uses three terms (1, 8, 27) to generate:
 * 	P(1) = 6 - 11 + 6 = 12 - 11 = 1
 * 	P(2) = 6 * 4 - 11 * 2 + 6 = 24 - 22 + 6 = 30 - 22 = 8
 * 	P(3) = 6 * 9 - 11 * 3 + 6 = 54 - 33 + 6 = 60 - 33 = 27
 * 	P(4) = 6 * 16 - 11 * 4 + 6 = 96 - 44 + 6 = 102 - 44 = 58 (BOP)
 *
 * There are no BOPs for k \geq 4 when looking at the cubic numbers.
 * 
 * By considering the sum of the FITs for the BOPs we obtain 1 + 15 + 58 = 74.
 *
 * Now, let u_n = 1 - n + n^2 - n^3 + n^4 - n^5 + n^6 - n^7 + n^8 - n^9 + n^10 be given.
 *
 * Find the sum of FITs for the BOPs.
 */

function tenth(n, a, b, c, d, e, f, g, h, i, j, k) {
	return a + b*n + c*n**2 + d*n**3 + e*n**4 + f*n**5 + g*n**6 + h*n**7 + i*n**8 + j*n**9 + k*n**10;
}

function third(n, a, b, c, d) {
	return tenth(n, a, b, c, d, 0, 0, 0, 0, 0, 0, 0, 0);
}

function model(n) {
	return tenth(n, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1);
}

function cube(n) {
	return third(n, 0, 0, 0, 1);
}

for(let i=1; i<=11; i++) {
	console.log(i, cube(i));
}

