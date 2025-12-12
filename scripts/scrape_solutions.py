#python scrape_solutions.py --year 2015

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
import argparse

directory = os.path.dirname(os.path.realpath(sys.argv[0]))
cookie_path = os.path.join(directory, "session_cookie.txt")

parser = argparse.ArgumentParser()
parser.add_argument("--year", type=int, required=True)
args = parser.parse_args()

session_cookie = ""
if os.path.isfile(cookie_path):   
    with open(cookie_path, "r") as f:
        session_cookie = f.readline()        
    
if (session_cookie == ""):
    session_cookie = input("Enter your session cookie: ")
    with open(cookie_path, "w") as f:
        f.write(session_cookie)

if (os.path.exists(f"{os.path.dirname(directory)}/years/{args.year}")):
    solutions = []
    days = 25 if args.year < 2025 else 12

    for day in range(1, days + 1):
        print(f"Request https://adventofcode.com/{args.year}/day/{day}")
        response = requests.get(f"https://adventofcode.com/{args.year}/day/{day}", cookies={"session": session_cookie})
        matches = re.findall(r"Your puzzle answer was\s*<code>(.*?)</code>", response.text)

        solutions.append("||".join(matches))

    path = f"{os.path.dirname(directory)}/years/{args.year}"

    with open(f"{path}/_solutions.txt", "w") as f:
        f.write('\n'.join(solutions))