const app = {
  baseURL: 'professor.json',
  init: () => {
      document.addEventListener('DOMContentLoaded', app.load);
      console.log('HTML loaded');
  },
  load: () => {
      //the page had finished loading its HTML
      var studentData = [];
      app.getData();
  },
  getData: () => {
      let page = document.body.id;
      switch (page) {
          case 'main':
              app.run();
              break;
          default:
              app.somethingElse();
      }
  },
  run: () => {
    var studInterest1 = document.getElementById('area1');
    var studInterest2 = document.getElementById('area2');
    var studInterest3 = document.getElementById('area3');
  
    var submitButton = document.getElementById("match-button");

    submitButton.addEventListener("click", function(){
      // console.log(profInterest1.value, profInterest2.value, profInterest3.value);
      if (studInterest1.value == ""){
        studInterest1.value = NaN;
      }
      if (studInterest2.value == ""){
        studInterest2.value = NaN;
      }
      if (studInterest3.value == ""){
        studInterest3.value = NaN;
      }
      studentData = [studInterest1.value, studInterest2.value, studInterest3.value];
      // console.log(studentData);
      app.getPosts();
    })
  },
  getPosts: () => {
    let url = app.baseURL;
    let req = new Request(url, {
        method: 'GET',
        mode: 'cors'
    });
    fetch(url)
        .then(response => response.json())
        .then(app.matchProfessors)
        .catch(app.err);
  },
  matchProfessors: (professorData) => {
    const matchingProfessors = [];  
    professorData.professors.forEach(professor => {
      let score = 0;
      if (professor.area_of_study_1.includes(studentData[0])) {
        score += 3;
      }
      if (professor.area_of_study_2.includes(studentData[1])) {
        score += 2;
      }
      if (professor.area_of_study_3.includes(studentData[2])) {
        score += 1;
      }
      professor.score = score;
      matchingProfessors.push(professor);
    });

    matchingProfessors.sort((a, b) => b.score - a.score);
    console.log(matchingProfessors);
    // return matchingProfessors.slice(0, 3);
  },
  err: (err) => {
      //display the error to the user
      let div = document.createElement('div');
      div.className = 'error msg';
      div.textContent = err.message;
      document.body.appendChild(div);
      setTimeout(() => {
          let div = document.querySelector('.error.msg');
          div.parentElement.removeChild(div);
      }, 3000);
  }
}
app.init();



// const url = "professor.json";

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         // Select three random professors
//         const selectedProfessors = matchProfessors(profInterest1, profInterest2, profInterest3, data.professors)

//         // Display the selected professors
//         selectedProfessors.forEach((professor, index) => {
//             const professorName = professor.first_name + " " + professor.last_name;
//             const professorImageUrl = professor.image;
//             const professorEmail = professor.email_id;
//             const professorAreasOfStudy = [
//                 professor.area_of_study_1,
//                 professor.area_of_study_2,
//                 professor.area_of_study_3
//             ];

//             // Set the professor image
//             const imageElement = document.querySelectorAll("img")[index];
//             imageElement.src = professorImageUrl;

//             // Set the professor name
//             const nameElement = document.querySelectorAll(".prof-name")[index];
//             nameElement.textContent = professorName;

//             // // Set the professor areas of study
//             const areasOfStudyElement = document.querySelectorAll(".prof-area")[index];
//             professorAreasOfStudy.forEach(areaOfStudy => {
//                 const liElement = document.createElement("li");
//                 liElement.textContent = areaOfStudy;
//                 areasOfStudyElement.appendChild(liElement);
//             });

//             // Set the professor email
//             const emailElement = document.querySelectorAll(".email-content")[index];
//             emailElement.textContent = professorEmail;
//         });
//     })
//     .catch(error => console.error(error));

