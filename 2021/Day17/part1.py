import re

inp = "target area: x=70..125, y=-159..-121"

y = int(re.search("y=(-?[0-9]*)..",inp).group(1))
sn = int((abs(y) * (abs(y)-1))/2)
print(sn)
