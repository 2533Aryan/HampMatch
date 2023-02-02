// Parsing CSV data
const csvData = "professor,expertise\nJohn Doe,Artificial Intelligence\nJane Doe,Machine Learning\nBob Smith,Computer Science\nAlice Johnson,Data Science";
const data = Papa.parse(csvData).data;

// Creating an array of professors
const professors = [];
for (let i = 1; i < data.length; i++) {
  const professor = {
    name: data[i][0],
    expertise: data[i][1],
  };
  professors.push(professor);
}

// Function to match student with professor
function matchWithProfessor(studentInterests) {
  let bestMatch = { name: "", score: 0 };
  professors.forEach(function (professor) {
    let score = 0;
    studentInterests.forEach(function (interest) {
      if (professor.expertise.includes(interest)) {
        score++;
      }
    });
    if (score > bestMatch.score) {
      bestMatch = { name: professor.name, score: score };
    }
  });
  return bestMatch.name;
}

// Testing the function
const studentInterests = ["Artificial Intelligence", "Machine Learning"];
const bestMatch = matchWithProfessor(studentInterests);
console.log(bestMatch); // Output: "John Doe"
