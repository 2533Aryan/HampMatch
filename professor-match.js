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


function display() {
  console.log(1);
  let interests = [];
  console.log(2);
  // error happens here
  interests.push(document.querySelector("input[name='interest1']").value);
  interests.push(document.querySelector("input[name='interest2']").value);
  interests.push(document.querySelector("input[name='interest3']").value);
  console.log(3);  // this thing never run
  let match = findMatch(interests);
  alert("Your best match is Professor " + match);
  console.log(4);  // this thing never run too
}


display();


// new 
document.querySelector("#submitButton").addEventListener("click", function() {
  interests.push(document.querySelector("input[name='interest1']").value);
  console.log(interests);
});