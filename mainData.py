import csv

# Fake data
professor_data = [
    ("John Doe", "Associate Professor", "Computer Science"),
    ("Jane Smith", "Assistant Professor", "Mathematics"),
    ("Bob Johnson", "Professor", "History"),
    ("Emma Wilson", "Assistant Professor", "Biology"),
    ("Michael Davis", "Associate Professor", "Political Science"),
    ("Sarah Kim", "Assistant Professor", "English"),
    ("David Lee", "Professor", "Economics"),
    ("Jennifer Brown", "Associate Professor", "Psychology"),
    ("William Smith", "Assistant Professor", "Philosophy"),
    ("Elizabeth Johnson", "Professor", "Sociology"),
    ("Thomas Lee", "Associate Professor", "Chemistry"),
    ("Karen Wilson", "Assistant Professor", "Physics"),
    ("James Davis", "Professor", "Art History"),
    ("Marie Kim", "Associate Professor", "Environmental Science"),
    ("Richard Brown", "Assistant Professor", "Music"),
]


# Write the header row
header = ["Name", "Title", "Area of Study"]

# Open a new file in write mode
with open("professors.csv", "w", newline="") as file:
    writer = csv.writer(file)
    
    # Write the header row
    writer.writerow(header)
    
    # Write the data for each professor
    for name, title, area_of_study in professor_data:
        writer.writerow([name, title, area_of_study])