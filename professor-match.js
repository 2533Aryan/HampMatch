// // Parsing CSV data
// const csvData = "professor,expertise\nJohn Doe,Artificial Intelligence\nJane Doe,Machine Learning\nBob Smith,Computer Science\nAlice Johnson,Data Science";
// const data = Papa.parse(csvData).data;

// // Creating an array of professors
// const professors = [];
// for (let i = 1; i < data.length; i++) {
//   const professor = {
//     name: data[i][0],
//     expertise: data[i][1],
//   };
//   professors.push(professor);
// }

// // Function to match student with professor
// function matchWithProfessor(studentInterests) {
//   let bestMatch = { name: "", score: 0 };
//   professors.forEach(function (professor) {
//     let score = 0;
//     studentInterests.forEach(function (interest) {
//       if (professor.expertise.includes(interest)) {
//         score++;
//       }
//     });
//     if (score > bestMatch.score) {
//       bestMatch = { name: professor.name, score: score };
//     }
//   });
//   return bestMatch.name;
// }

// // Testing the function
// const studentInterests = ["Artificial Intelligence", "Machine Learning"];
// const bestMatch = matchWithProfessor(studentInterests);
// console.log(bestMatch); // Output: "John Doe"


// Read the CSV data and store it in a variable
var csvData = "Professor Name,Title,Area of Study\nJohn Doe,Assistant Professor,Computer Science\nJane Smith,Associate Professor,History\nBob Johnson,Full Professor,Mathematics";

// Convert the CSV data to a 2D array
var dataArray = Papa.parse(csvData, {header: true}).data;

// Function to match the professor based on the student's selected interests
function matchProfessor(selectedInterests) {
  // Loop through each row of the dataArray
  for (var i = 0; i < dataArray.length; i++) {
    // Check if the professor's area of study is one of the selected interests
    if (selectedInterests.indexOf(dataArray[i]["Area of Study"]) !== -1) {
      // Return the professor's name and title if a match is found
      return dataArray[i]["Professor Name"] + " (" + dataArray[i]["Title"] + ")";
    }
  }
  // Return an error message if no match is found
  return "No match found";
}
