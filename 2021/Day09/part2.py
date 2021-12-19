directions = [(1,0),(-1,0),(0,1),(0,-1)]


def getNeighbourValue(board,x,y,width,height):  
    if x < 0 or x >= width or y < 0 or y >= height:
        return None   
    return board[y][x]


def getBasinSize(board,x,y,width,height,prev):  
    if x < 0 or x >= width or y < 0 or y >= height:
        return 0
    if board[y][x] == '*':
        return 0
    if board[y][x] == 9:
        return 0
    if board[y][x] < prev:
        return 0    

    v = board[y][x]
    board[y][x] = '*'
    size = 0
    
    for direction in directions:
        size += getBasinSize(board,x + direction[0],y + direction[1],width,height,v)

    return size + 1
    

board = []
positions = []

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
            positions.append((y,x))


sizeList = []
for position in positions:
    sizeList.append(getBasinSize(board,position[1],position[0],width,height,-1))

sizeList.sort(reverse=True)
print(sizeList[0] * sizeList[1] * sizeList[2])
