from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
origin = Point(0, 0)
def sign(p1, p2, p3): return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y)
def point_in_triangle(pt, v1, v2, v3):
    d1 = sign(pt, v1, v2)
    d2 = sign(pt, v2, v3)
    d3 = sign(pt, v3, v1)

    has_neg = d1 < 0 or d2 < 0 or d3 < 0
    has_pos = d1 > 0 or d2 > 0 or d3 > 0

    return not (has_neg and has_pos)
assert point_in_triangle(origin,Point(-340,495),Point(-153,-910),Point(835,-947))
assert not point_in_triangle(origin,Point(-175,41), Point(-421,-714),Point(574,-645))

def get_triangles(data):
    lines = [list(map(int, line.split(','))) for line in data.strip().split('\n')]
    return [[Point(*a[:2]),Point(*a[2:4]),Point(*a[4:])] for a in lines]
with open('102.txt') as f:
    count = 0
    data = f.read()
    triangles = get_triangles(data)
    for a, b, c in triangles:
        count += 1 if point_in_triangle(origin, a, b, c) else 0
    print(count)
