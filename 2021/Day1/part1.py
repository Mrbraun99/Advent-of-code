count = 0
previous = None
current = None

with open("input.txt") as file:
    for line in file:
        current = int(line)
        if previous != None:            
            if current > previous:
                count += 1

        previous = current
                
print(count)
