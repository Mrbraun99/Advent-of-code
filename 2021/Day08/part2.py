sumOfNum = 0

with open("input.txt") as file:
    for line in file:
        digitCodes = {}
        codeToNum = {}

        values = line.split("|")
        allDigits = [x.strip() for x in (values[0]).split(" ")]
        digitsToFind = [x.strip() for x in (values[1]).split(" ")]
      
        for digit in allDigits:            
            if len(digit) == 2:
                digitCodes["1"] = digit                
            elif len(digit) == 3:
                digitCodes["7"] = digit                
            elif len(digit) == 4:                
                digitCodes["4"] = digit                
            elif len(digit) == 7:                
                digitCodes["8"] = digit                
                        
        for digit in allDigits:
            if len(digit) == 5:
                if len(set(digit)&set(digitCodes["1"])) == 2:
                    digitCodes["3"] = digit                   
                else:
                    if len(set(digit)&set(digitCodes["4"])) == 2:
                        digitCodes["2"] = digit                        
                    else:
                        digitCodes["5"] = digit                       
            elif len(digit) == 6:
                if len(set(digit)&set(digitCodes["1"])) == 1:
                    digitCodes["6"] = digit                    
                else:
                    if len(set(digit)&set(digitCodes["4"])) == 3:
                        digitCodes["0"] = digit                        
                    else:
                        digitCodes["9"] = digit                       
          
        number = 0
        for qDigit in digitsToFind:
            for key,value in digitCodes.items():
                if set(value) == set(qDigit):
                    number *= 10
                    number += int(key)
                    break 
        sumOfNum += number

print(sumOfNum)
            
            
                
               



