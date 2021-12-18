directions = [(1,0),(-1,0),(1,1),(-1,1),(1,-1),(-1,-1),(0,1),(0,-1)]


def getNeighbourValue(board,x,y,width,height):  
    if x < 0 or x >= width or y < 0 or y >= height:
        return None   
    return board[y][x]
        

board = []
count = 0

with open("input.txt") as file:
    for line in file:
        line = line.strip()
        row = []
        for ch in line:
            row.append(int(ch))
        board.append(row)


height = len(board)
width = len(board[0])

for y in range(height):
    for x in range(width):
        neighbours = []
        for direction in directions:
            neighbours.append(getNeighbourValue(board,x + direction[0],y + direction[1],width,height))
        
        for v in neighbours:
            if v == None:
                continue
            if v <= board[y][x]:
                break
        else:
            count += board[y][x] + 1

print(count)
            
       
