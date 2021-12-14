directions = [(1,0),(-1,0),(1,1),(-1,1),(1,-1),(-1,-1),(0,1),(0,-1)]

def handleOctopus(board,x,y):
    if x < 0 or x > 9 or y < 0 or y > 9:
        return
    board[y][x] += 1
    if board[y][x] > 9:
        board[y][x] = -100
        for direction in directions:
            handleOctopus(board,x + direction[1],y + direction[0])         


    
width,height = 10,10
board = [[0 for x in range(width)] for y in range(height)] 

lineCounter = 0
with open("input.txt") as file:
    for line in file:
        for i in range(10):
            board[lineCounter][i] = int(line[i])        
        lineCounter += 1

counter = 0
while (True):
    counter += 1
    for y in range(10):
        for x in range(10):
           handleOctopus(board,x,y)
    
    flashes = 0
    for y in range(10):
        for x in range(10):
            if board[y][x] < 0:
                flashes +=1
                board[y][x] = 0

    if flashes == 100:
        print(counter)
        break
                      
                        
                        
                
            
        



