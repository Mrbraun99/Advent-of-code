counter = 0
with open("input.txt") as file:
    for line in file:
        values = (line.split("|")[1]).split(" ")

        for value in values:
            if len(value.strip()) in [2,4,3,7]:
                counter += 1

print(counter)

