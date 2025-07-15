def is_right(p, q):
    [px, py] = p
    [qx, qy] = q
    op = (px**2 + py**2)
    oq = (qx**2 + qy**2)
    pq = (px-qx)**2 + (py-qy)**2

    if pq > op and pq > oq: # pq longest
        if pq == op + oq:
            return True
    elif op > pq and op > oq: # op longest
        if op == pq + oq:
            return True
    elif oq > op and oq > pq: # oq longest
        if oq == op + pq:
            return True
    return False

def solve(N):
    points = [(x, y) for y in range(0,N+1) 
                     for x in range(0,N+1)]
    points.pop(0) # delete the origin
    n_points = len(points)

    count = 0
    for pi in range(n_points):
        for qi in range(pi+1, n_points):
            p = points[pi]
            q = points[qi]
            if is_right(p, q): count += 1
    return count

print(solve(50))
