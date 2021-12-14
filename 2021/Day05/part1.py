width,height = 1000,1000
board = [[0 for x in range(width)] for y in range(height)] 

with open("input.txt") as file:
    for line in file:
      values = line.split("->")
      pos1 = values[0].split(",")
      pos2 = values[1].split(",")             

      x1 = int(pos1[0])
      y1 = int(pos1[1])
      x2 = int(pos2[0])
      y2 = int(pos2[1])

      if x1 == x2:
         d = 1 if y1 < y2 else -1
         for i in range(y1,y2 + d,d):
            board[i][x1] += 1
      elif y1 == y2:
         d = 1 if x1 < x2 else -1
         for i in range(x1,x2 + d,d):
             board[y1][i] += 1
      else:
         pass

danger = 0
for y in range(height):
   for x in range(width):
      if board[y][x] > 1:
         danger +=1

print(danger)
      
        



