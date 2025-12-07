import importlib
import subprocess
import sys

required_modules = [
    "requests",    
]    

for module in required_modules:
    try:
        importlib.import_module(module)
    except ImportError:      
        subprocess.check_call([sys.executable, "-m", "pip", "install", module])

import sys
import os
import re
from datetime import datetime
import requests

content = """export function part1(input) {
       
}

export function part2(input) {

}"""

directory = os.path.dirname(os.path.realpath(sys.argv[0]))
cookie_path = os.path.join(directory, "session_cookie.txt")

session_cookie = ""
if os.path.isfile(cookie_path):   
    with open(cookie_path, "r") as f:
        session_cookie = f.readline()        
    
if (session_cookie == ""):
    session_cookie = input("Enter your session cookie: ")
    with open(cookie_path, "w") as f:
        f.write(session_cookie)

for year in range(2015,datetime.now().year + 1):
    if (os.path.exists(f"{os.path.dirname(directory)}/years/{year}")):
        days = 25 if year < 2025 else 12

        for day in range(1, (days if year != datetime.now().year else min(days, datetime.now().day)) + 1):
            path = f"{os.path.dirname(directory)}/years/{year}/day{day:02d}"

            os.makedirs(path, exist_ok=True)

            if not os.path.isfile(f"{path}/solution.js"):
                with open(f"{path}/solution.js", "w") as f:
                    f.write(content)               

            if not os.path.isfile(f"{path}/input.txt"):
                print(f"Request https://adventofcode.com/{year}/day/{day}")
                response = requests.get(f"https://adventofcode.com/{year}/day/{day}/input", cookies={"session": session_cookie})
                
                with open(f"{path}/input.txt", "w") as f:
                    f.write(response.text.rstrip()) 