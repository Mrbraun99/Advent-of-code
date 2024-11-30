import os
import sys
from datetime import datetime
import requests
from termcolor import colored

directory = os.path.dirname(os.path.realpath(sys.argv[0]))

session_cookie = ""
if os.path.isfile(f"session_cookie.txt"):
    f = open("session_cookie.txt", "r")
    session_cookie = f.readline()
    
if (session_cookie == ""):
    session_cookie = input("Enter your session cookie: ");

content = """export function part1(input) {
       
}

export function part2(input) {

}"""

def init_day(year, day):    
    if not os.path.exists(f"{directory}/{year}/day{day:02d}"):
        os.makedirs(f"{directory}/{year}/day{day:02d}")
        
    if not os.path.isfile(f"{directory}/{year}/day{day:02d}/solution.js"):
        f = open(f"{directory}/{year}/day{day:02d}/solution.js", "w")
        f.write(content)
        f.close()

    if not os.path.isfile(f"{directory}/{year}/day{day:02d}/input.txt"):
        print(f"Request https://adventofcode.com/{year}/day/{day}")
        response = requests.get(f"https://adventofcode.com/{year}/day/{day}/input", cookies={"session": session_cookie})
        
        f = open(f"{directory}/{year}/day{day:02d}/input.txt", "w")
        f.write(response.text.rstrip())
        f.close()

for year in range(2015,datetime.now().year):
    if os.path.exists(f"{directory}/{year}"):
        for day in range(1,26):
            init_day(year, day)

if (datetime.now().month == 12):
    for day in range(1,min(26, datetime.now().day + 1)):
        init_day(datetime.now().year, day)

os.system('color')
print(colored("Extracting Aoc inputs completed successfully!", 'green'))