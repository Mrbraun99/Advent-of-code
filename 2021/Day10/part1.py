import re

pairs = {'(':')','[':']','{':'}','<':'>'}
points = {')' : 3,']': 57,'}' : 1197,'>' : 25137}

count = 0
with open("input.txt") as file:
    for line in file:
        line = line.strip()
        prevLength = len(line)
        while True:
            
            line = re.sub(r"\(\)","",line)
            line = re.sub(r"\[\]","",line)
            line = re.sub(r"\{\}","",line)
            line = re.sub(r"<>","",line)

            if prevLength == len(line):
                break
            prevLength = len(line)           

        for i in range(len(line) - 1):
            if line[i] not in ['(','[','{','<']:
                continue
            if line[i+1] not in [')',']','}','>']:
                continue
            
            bracket = line[i]
            if line[i+1] != pairs[bracket]:
                count += points[line[i+1]]
                break
            
print(count)

