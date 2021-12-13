LINE_LENGTH = 12
lineCounter = 0
ones = [0]*LINE_LENGTH


with open("input.txt") as file:
    for line in file:
        lineCounter += 1

        for i in range(LINE_LENGTH):
            if line[i] == "1":
                ones[i] += 1

gamma = ""
epsilon = ""

for i in range(LINE_LENGTH):
    if ones[i]*2 < lineCounter:
        gamma += "0"
        epsilon += "1"
    else:
        gamma += "1"
        epsilon += "0"
            
print(int(gamma,2) * int(epsilon,2))
