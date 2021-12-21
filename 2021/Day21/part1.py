positions = [4,9]
scores = [0,0]
rolls = 0


detDiceValue = 1
end = False
while not end:
    values =[]
    for i in range(6):
        values.append(((detDiceValue + i - 1) % 100) + 1)
    detDiceValue = values[-1] + 1    

    moves = []
    moves.append(values[0] + values[1] + values[2])
    moves.append(values[3] + values[4] + values[5])
    
    for i in range(2):
        rolls += 3
        positions[i] = ((positions[i] + moves[i] - 1) % 10) + 1
        scores[i] += positions[i]

        if scores[i] >= 1000:
            end = True
            break
    
score = scores[0] if scores[1] >=1000 else scores[1]
print(rolls * score)
    



