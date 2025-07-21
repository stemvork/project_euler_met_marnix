# can be late once at most
# can't be absent three consecutive days

# string with n x "O" wins a prize
# string with zero or one "L" wins a prize
# string with 0, 1 or 2 consecutive "A" wins a prize

def is_valid(string):
    if string.count("L") > 1: return False

    parts = list(filter(None, string.translate(str.maketrans({ "O": " ", "L": " " })).split()))
    # print(parts)
    if len(parts) == 0: return True

    lengths = list(map(len, parts))
    if max(lengths) >= 3: return False
    # print(parts, lengths)
    return True
assert is_valid("OOOO") == True
assert is_valid("AOAO") == True
assert is_valid("AAAO") == False
assert is_valid("ALAL") == False

def is_valid_state(state): return is_valid(state[0])

from collections import deque
def grow_tree(state):
    tree, _ = state
    #print(tree)
    result = deque([])
    for state in tree:
        #print(state)
        states = grow(state)
        result.extend(states)
        #print(state, '->', states)
    if result[0][1]:
        return (result, True)
    return (result, False)

def grow(state):
    # print(state)
    a, done, b = state
    if done: 
        return (a, done, b)
    head = a[0:b]
    tail = a[b+1:]
    done = False if b+1 != len(a) else True
    result = [(head+"O"+tail, done, b+1), (head+"A"+tail, done, b+1), (head+"L"+tail, done, b+1)]
    result = list(filter(is_valid_state, result))
    # print(result)
    return result
assert grow(("OOO", False, 0)) == [("OOO", False, 1), ("AOO", False, 1), ("LOO", False, 1)]
assert grow(("OOO", False, 2)) == [("OOO", True, 3), ("OOA", True, 3), ("OOL", True, 3)]
assert grow(("AAO", False, 2)) == [("AAO", True, 3), ("AAL", True, 3)]

from itertools import repeat, chain
def count_winning_trinary_strings(n):
    base_string = "".join(chain(*zip(*repeat("O", n))))
    state = (base_string, False, 0)
    states = grow(state)
    tree = (deque([*states]), False)
    while not tree[1]:
        tree = grow_tree(tree)
    # tree = grow_tree(tree)
    # tree = grow_tree(tree)
    # print(tree)
    # print(len(tree[0]))

    return len(tree[0])
assert count_winning_trinary_strings(4) == 43
print(count_winning_trinary_strings(50))
