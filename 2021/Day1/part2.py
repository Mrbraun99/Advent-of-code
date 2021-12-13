count = 0
values = []

with open("input.txt") as file:
    for line in file:
        values.append(int(line))

        if len(values) < 4:
            continue
        
        sum1 = values[0] + values[1] + values[2]
        sum2 = values[1] + values[2] + values[3]

        if sum2 > sum1:
            count += 1

        values.pop(0)
                        
print(count)
