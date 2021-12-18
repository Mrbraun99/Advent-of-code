import re

pairs = {'(':')','[':']','{':'}','<':'>'}
points = {')' : 1,']': 2,'}' : 3,'>' : 4}

scores = []
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

        for i in range(len(line)-1):
            if line[i] not in ['(','[','{','<']:
                continue
            if line[i+1] not in [')',']','}','>']:
                continue
            
            bracket = line[i]
            if line[i+1] != pairs[bracket]:                
                break
        else:           
            score = 0
            for i in range(len(line) - 1,-1,-1):
                score *= 5
                score += points[pairs[line[i]]]               

            scores.append(score)

scores.sort()
print(scores[len(scores)//2])


        


