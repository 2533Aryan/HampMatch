const app = {
  baseURL: 'professor.json',
  init: () => {
      document.addEventListener('DOMContentLoaded', app.load);
      console.log('HTML loaded');
  },
  load: () => {
      //the page had finished loading its HTML
      var profData = [];
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
    var profInterest1 = document.getElementById('area1');
    var profInterest2 = document.getElementById('area2');
    var profInterest3 = document.getElementById('area3');
  
    var submitButton = document.getElementById("match-button");

    submitButton.addEventListener("click", function(){
      console.log(profInterest1.value, profInterest2.value, profInterest3.value);
      profData = [profInterest1.value, profInterest2.value, profInterest3.value];
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
        .then(app.matchProfessors())
        .catch(app.err);
  },
  showPosts: (posts) => {
      // create a list with the post data
      let df = document.createDocumentFragment();
      
      posts.professors.forEach(post => {
          console.log(post);
          // let li = document.createElement('li');
          // li.textContent = post.first_name;
          // li.setAttribute('data-id', post.first_name);
          // df.appendChild(li);
      });
      // ul.appendChild(df);
  },
  matchProfessors: (professorData) => {
    
    const matchingProfessors = [];  
    professorData.forEach((professor) => {
      let score = 0;
      if (professor.area_of_study_1.includes(profData[0])) {
        score += 3;
      }
      if (professor.area_of_study_2.includes(profData[1])) {
        score += 2;
      }
      if (professor.area_of_study_3.includes(profData[3])) {
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



// // Algorithm to match professor
// function matchProfessors(interest1, interest2, interest3, professorData) {
//     const matchingProfessors = [];
//     professorData.forEach((professor) => {
//       let score = 0;
//       if (professor.area_of_study_1.includes(interest1)) {
//         score += 3;
//       }
//       if (professor.area_of_study_2.includes(interest2)) {
//         score += 2;
//       }
//       if (professor.area_of_study_3.includes(interest3)) {
//         score += 1;
//       }
//       professor.score = score;
//       matchingProfessors.push(professor);
//     });
  
//     matchingProfessors.sort((a, b) => b.score - a.score);
//     // console.log(matchingProfessors);
//     return matchingProfessors.slice(0, 3);
//   }
