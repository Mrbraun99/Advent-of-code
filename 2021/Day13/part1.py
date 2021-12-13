inputPart = 0
dotPositions = {}

with open("input.txt") as file:
    for line in file:
        if line == "\n":
            inputPart = 1
            continue

        if inputPart == 0:
            values = line.split(",")            
            dotPositions[(int(values[0]),int(values[1]))] = True
        else:
            values = line.split(" ")[2].split("=")         
            axis = values[0]
            foldLineIndex = int(values[1])

            idx = 0
            if axis == "y":
                idx = 1        
                
            newDotPostions = {}
            for key in dotPositions.keys():
                if key[idx] == foldLineIndex:
                    continue
                elif key[idx] < foldLineIndex:
                    newDotPostions[key] = True
                else:
                    x = key[0]
                    y = key[1]

                    if axis == "y":
                        y = abs(y - 2*foldLineIndex)
                    else:
                        x = abs(x - 2*foldLineIndex)

                    newDotPostions[(x,y)] = True
                    

            dotPositions = newDotPostions
            break
            

print(len(dotPositions.keys()))

                        
                        
                        
                        
                
            
        



