def triangle(n):
    return n*(n+1)//2

def count_divisors(n):
    count = 0
    for i in range(1, n):
        if n%i==0:
            count += 1

    return count

i = 0
t = triangle(i)
d = count_divisors(t)
while d <= 500:
    i += 1
    t = triangle(i)
    d = count_divisors(t)

print(t)


