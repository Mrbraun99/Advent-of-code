with open("input.txt") as file:
    for line in file:
        values = [int(x) for x in line.split(",")]
        values.sort()

        median = values[len(values)//2]  

        moves = 0
        for value in values:
            moves += abs(median - value)

        print(moves)
                
            
        



