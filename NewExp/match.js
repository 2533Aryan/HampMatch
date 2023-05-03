const app = {
  baseURL: 'professor.json',
  init: () => {
      document.addEventListener('DOMContentLoaded', app.load);
      console.log('HTML loaded');
  },
  load: () => {
      //the page had finished loading its HTML
      app.getData();
  },
  getData: () => {
      //based on the current page...
      let page = document.body.id;
      switch (page) {
          case 'main':
              app.run();
              //add custom event listeners for posts page
              break;
          default:
              app.somethingElse();
      }
  },
  getPosts: () => {
      let url = app.baseURL;
      let req = new Request(url, {
          method: 'GET',
          mode: 'cors'
      });
      fetch(url)
          .then(response => response.json())
          .then(app.showPosts)
          .catch(app.err);
  },
  run: () => {
      var firstname = document.getElementById("firstname")
      var lastname = document.getElementById("lastname")
      var jsonBtn = document.getElementById("jsonbtn")
      
      jsonBtn.addEventListener("click", function(){
          data = [firstname.value, lastname.value];
          app.run2();
          // console.log(data);
      })
  },
  run2: () => {
      console.log(window.location.search);
      window.location.href='page-two.html'
      app.getPosts();
  },
  showPosts: (posts) => {
      //remove the loading li
      let ul = document.querySelector('.list');
      ul.innerHTML = '';
      // create a list with the post data
      let df = document.createDocumentFragment();
      console.log(data);
      posts.professors.forEach(post => {
          if(post.first_name = data[0]){
              data = [];
              let li = document.createElement('li');
              li.textContent = post.first_name;
              li.setAttribute('data-id', post.first_name);
              df.appendChild(li);
          }
      });
      ul.appendChild(df);
  },
  err: (err) => {
      //remove the loading li
      let ul = document.querySelector('.list');
      ul.innerHTML = '';
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


// var submitButton = document.getElementById("match-button");
        
// submitButton.addEventListener("click", function(){
//   // var profInterest1 = document.querySelector('input[type="text"][name="Area1"]').value;
//   // var profInterest2 = document.querySelector('input[type="text"][name="Area2"]').value;
//   // var profInterest3 = document.querySelector('input[type="text"][name="Area3"]').value;

//   // console.log(profInterest1, profInterest2, profInterest3);
// })

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



// Algorithm to match professor
function matchProfessors(interest1, interest2, interest3, professorData) {
    const matchingProfessors = [];
    professorData.forEach((professor) => {
      let score = 0;
      if (professor.area_of_study_1.includes(interest1)) {
        score += 3;
      }
      if (professor.area_of_study_2.includes(interest2)) {
        score += 2;
      }
      if (professor.area_of_study_3.includes(interest3)) {
        score += 1;
      }
      professor.score = score;
      matchingProfessors.push(professor);
    });
  
    matchingProfessors.sort((a, b) => b.score - a.score);
    // console.log(matchingProfessors);
    return matchingProfessors.slice(0, 3);
  }
