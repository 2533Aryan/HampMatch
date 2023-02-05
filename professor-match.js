document.getElementById("match-form").addEventListener("submit", function(event){
  event.preventDefault();
  display();

  // Get the interests entered by the user
  let interest1 = document.querySelector('input[name="interest1"]').value;
  let interest2 = document.querySelector('input[name="interest2"]').value;
  let interest3 = document.querySelector('input[name="interest3"]').value;

  // Find the best match professor
  let bestMatch = matchInterests(interest1, interest2, interest3);

  // Display the result to the user
  alert("The best match professor is " + bestMatch.Name + " (" + bestMatch.Title + ") with an area of study in " + bestMatch.Area_of_Study + ".");

});

function display() {
  document.write("<h1>message</h1>");
  document.
}

// load the data from the CSV file
function loadData() {
  var data = [];
  // read the file and parse its contents
  // this is just an example and will not work in a browser
  var file = new File("professor.csv");
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(event) {
    var csv = event.target.result;
    var lines = csv.split("\n");
    for (var i = 0; i < lines.length; i++) {
      var fields = lines[i].split(",");
      var professor = {
        Name: fields[0],
        Title: fields[1],
        AreaOfStudy: fields[2]
      };
      data.push(professor);
    }
  };
  return data;
}

// function to match the user's interests with the professor's area of study
function matchInterests(data, interests) {
  var scores = [];
  for (var i = 0; i < data.length; i++) {
    var score = 0;
    for (var j = 0; j < interests.length; j++) {
      if (data[i].AreaOfStudy.includes(interests[j])) {
        score++;
      }
    }
    scores.push({
      Name: data[i].Name,
      Score: score
    });
  }
  scores.sort(function(a, b) {
    return b.Score - a.Score;
  });
  return scores[0].Name;
}

// function to handle the form submit event
function handleSubmit(event) {
  event.preventDefault();
  var data = loadData();
  var interests = [
    document.getElementsByName("interest1")[0].value,
    document.getElementsByName("interest2")[0].value,
    document.getElementsByName("interest3")[0].value
  ];
  var bestMatch = matchInterests(data, interests);
  document.write("Best match: " + bestMatch);
}

// add the event listener to the form
document.getElementById("match-form").addEventListener("submit", handleSubmit);