# crazy elegant solution https://betaprojects.com/solutions/project-euler/project-euler-problem-094-solution/
for _ in range(int(input())):
    N = int(input())
    s0, s1, s, p, m = 1, 1, 0, 0, 1
    while p <= N:
        s0, s1, m = s1, 4 * s1 - s0 + 2 * m, -m
        print(s0)
        s+= p
        p = 3 * s1 - m
    print(s)	
