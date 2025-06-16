import os
import sys
from datetime import datetime
import requests
from termcolor import colored

content = """export function part1(input) {
       
}

export function part2(input) {

}"""


directory = os.path.dirname(os.path.realpath(sys.argv[0]))

session_cookie = ""
if os.path.isfile(f"session_cookie.txt"):
    f = open("session_cookie.txt", "r")
    session_cookie = f.readline()
    
if (session_cookie == ""):
    session_cookie = input("Enter your session cookie: ")

for year in range(2015,datetime.now().year + 1):
    if ((year == datetime.now().year and datetime.now().month == 12) or os.path.exists(f"{directory}/src/{year}")):
        for day in range(1, 26 if year != datetime.now().year else min(26, datetime.now().day + 1)):
            path = f"{directory}/src/{year}/day{day:02d}"

            if not os.path.exists(path):
                os.makedirs(path)
                
            if not os.path.isfile(f"{path}/solution.js"):
                f = open(f"{path}/solution.js", "w")
                f.write(content)
                f.close()

            if not os.path.isfile(f"{path}/input.txt"):
                print(f"Request https://adventofcode.com/{year}/day/{day}")
                response = requests.get(f"https://adventofcode.com/{year}/day/{day}/input", cookies={"session": session_cookie})
                
                f = open(f"{path}/input.txt", "w")
                f.write(response.text.rstrip())
                f.close

os.system('color')
print(colored("Extracting Aoc inputs completed successfully!", 'green'))