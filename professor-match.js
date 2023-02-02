document.querySelector("input[type='submit']").addEventListener("click", function(event) {
  event.preventDefault(); // prevent form submission

  // get the values of the three interests from the form
  var interest1 = document.querySelector("input[name='interest1']").value;
  var interest2 = document.querySelector("input[name='interest2']").value;
  var interest3 = document.querySelector("input[name='interest3']").value;

  // your matching algorithm here
  // ...

  // example output
  alert("The best match professor for interests '" + interest1 + "', '" + interest2 + "', '" + interest3 + "' is Professor X");
});

// document.querySelector("input[type='submit']").addEventListener("click", function(event) {
//   event.preventDefault();
//   // code to run your algorithm to match professor
  
// // Load the CSV file using PapaParse library
// Papa.parse("professors.csv", {
//   header: true,
//   download: true,
//   complete: function(results) {
//     var data = results.data;
    
//     // Listen for the submit event of the form
//     document.querySelector("form").addEventListener("submit", function(e) {
//       e.preventDefault();
      
//       // Get the values of the student's interests from the form
//       var interest1 = document.querySelector("input[name='interest1']").value;
//       var interest2 = document.querySelector("input[name='interest2']").value;
//       var interest3 = document.querySelector("input[name='interest3']").value;
      
//       // Compare each professor's area of study with the student's interests
//       var bestMatch = null;
//       var bestMatchScore = 0;
//       data.forEach(function(professor) {
//         var score = 0;
//         if (professor.area_of_study.includes(interest1)) {
//           score++;
//         }
//         if (professor.area_of_study.includes(interest2)) {
//           score++;
//         }
//         if (professor.area_of_study.includes(interest3)) {
//           score++;
//         }
        
//         // Update the best match if the current professor has a higher score
//         if (score > bestMatchScore) {
//           bestMatch = professor;
//           bestMatchScore = score;
//         }
//       });
      
//       // Show the best match professor's name and contact information
//       if (bestMatch) {
//         alert("Best match: " + bestMatch.name + "\nContact: " + bestMatch.contact);
//       } else {
//         alert("No match found.");
//       }
//     });
//   }
// });

// });