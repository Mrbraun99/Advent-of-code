with open("input.txt") as file:
    for line in file:
        values = [int(x) for x in line.split(",")]        
        
        minFuel = float('inf')
        for i in range(len(values)):
            fuel = 0
            for value in values:
                distance = abs(i - value)
                fuel += distance * (distance + 1)/2                

            if fuel < minFuel:
                minFuel = fuel

        print(int(minFuel))
        



