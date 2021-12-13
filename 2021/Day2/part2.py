aim = 0
posX = 0
posY = 0

with open("input.txt") as file:
    for line in file:
        values = line.split(" ")
        direction = values[0]
        amount = int(values[1])

        if direction == "forward":
            posX += amount
            posY += amount * aim
        elif direction == "down":
            aim += amount
        else:
            aim -= amount

print(posX * posY)
