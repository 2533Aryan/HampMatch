document.getElementById("match-form").addEventListener("submit", function(event){
  event.preventDefault();
  let name = "John"
  alert("Your best match is Professor " + name);
  
  // display();

  // Get the interests entered by the user
  // let interest1 = document.querySelector('input[name="interest1"]').value;
  // let interest2 = document.querySelector('input[name="interest2"]').value;
  // let interest3 = document.querySelector('input[name="interest3"]').value;

  // // Find the best match professor
  // let bestMatch = matchInterests(interest1, interest2, interest3);

  // // Display the result to the user
  // alert("The best match professor is " + bestMatch.Name + " (" + bestMatch.Title + ") with an area of study in " + bestMatch.Area_of_Study + ".");

});


function display() {
  let interests = [];
  interests.push(document.querySelector("input[name='interest1']").value);
  interests.push(document.querySelector("input[name='interest2']").value);
  interests.push(document.querySelector("input[name='interest3']").value);
  
  let match = findMatch(interests);
  alert("Your best match is Professor " + match);
}

// async function display() {
//   let form = document.getElementById("match-form");
//   let interests = [
//     form.elements.interest1.value,
//     form.elements.interest2.value,
//     form.elements.interest3.value
//   ];
//   let match = await findMatch(interests);
//   let output = document.createElement("p");
//   output.innerText = "Your best match is Professor " + match;
//   form.appendChild(output);
// }


async function findMatch(interests) {
  let response = await fetch("professors.csv");
  let data = await response.text();
  let professors = [];
  let rows = data.split("\n");
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].split(",");
    professors.push({
      name: cells[0],
      interests: cells[1].split(";")
    });
  }
  
  let matchScore = 0;
  let matchName = "";
  
  for (let i = 0; i < professors.length; i++) {
    let score = 0;
    for (let j = 0; j < interests.length; j++) {
      if (professors[i].interests.includes(interests[j])) {
        score++;
      }
    }
    if (score > matchScore) {
      matchScore = score;
      matchName = professors[i].name;
    }
  }
  
  return matchName;
}

// async function findMatch(interests) {
//   let response = await fetch("professors.csv");
//   let data = await response.text();
//   let professors = [];
//   let rows = data.split("\n");
//   for (let i = 1; i < rows.length; i++) {
//     let cells = rows[i].split(",");
//     professors.push({
//       name: cells[0],
//       interests: cells[1].split(";")
//     });
//   }
  
//   let matchScore = 0;
//   let matchName = "";
  
//   for (let i = 0; i < professors.length; i++) {
//     let score = 0;
//     for (let j = 0; j < interests.length; j++) {
//       if (professors[i].interests.includes(interests[j])) {
//         score++;
//       }
//     }
//     if (score > matchScore) {
//       matchScore = score;
//       matchName = professors[i].name;
//     }
//   }
  
//   return matchName;
// }