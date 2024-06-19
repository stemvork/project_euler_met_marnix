a = 1
b = 1
c = 1

def check_pt(a, b, c):
    return a*a + b*b == c*c

done = False
for a in range(1, 1000):
    for b in range(a+1, 1000):
        for c in range(b+1, 1000):
            if(check_pt(a, b, c) and a + b + c == 1000):
                print(a, b, c)
                done = True
                break
        if done:
            break
    if done:
        break


