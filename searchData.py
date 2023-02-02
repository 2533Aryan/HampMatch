import requests
from bs4 import BeautifulSoup

# Make a request to the website
url = "https://www.example.com/faculty-directory"
response = requests.get(url)

# Use BeautifulSoup to parse the HTML
soup = BeautifulSoup(response.text, "html.parser")

# Find the information you want to extract
professors = soup.find_all("div", class_="faculty-member")
for professor in professors:
    name = professor.find("h3").text
    department = professor.find("span", class_="department").text
    expertise = professor.find("span", class_="expertise").text
    contact = professor.find("a", class_="email").text
    
    # Store the extracted data
    print(name, department, expertise, contact)
