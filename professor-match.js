document.getElementById("match-form").addEventListener("submit", function(event){
  event.preventDefault();
  let name = "John"
  alert("Your best match is Professor " + name);
});


function display() {
  let interests = [];
  interests.push(document.querySelector("input[name='interest1']").value);
  interests.push(document.querySelector("input[name='interest2']").value);
  interests.push(document.querySelector("input[name='interest3']").value);
  
  let match = findMatch(interests);
  alert("Your best match is Professor " + match);
}


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