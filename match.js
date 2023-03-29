// // const holder = document.querySelector("button")

// // function pageTwo() {
    
// // }

// // addEventListener('click', pageTwo)

// const url = "professor.json";

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const professorsList = document.getElementById("professors-list");
//     let professorsHtml = "<ul>";
//     data.professors.forEach(professor => {
//       const professorHtml = `
//         <li>
//           <h2>${professor.first_name} ${professor.last_name}</h2>
//           <p><strong>Area of Study:</strong> ${professor.area_of_study_1}, ${professor.area_of_study_2}, ${professor.area_of_study_3}</p>
//           <p><strong>Email:</strong> ${professor.email_id}</p>
//         </li>
//       `;
//       professorsHtml += professorHtml;
//     });
//     professorsHtml += "</ul>";
//     professorsList.innerHTML = professorsHtml;
//   })
//   .catch(error => console.error(error));

const url = "professor.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Select three random professors
        const selectedProfessors = selectRandomProfessors(data.professors, 3);

        // Display the selected professors
        selectedProfessors.forEach((professor, index) => {
            const professorName = professor.first_name + " " + professor.last_name;
            const professorImageUrl = professor.image_url;
            const professorEmail = professor.email_id;
            const professorAreasOfStudy = [
                professor.area_of_study_1,
                professor.area_of_study_2,
                professor.area_of_study_3
            ];

            // Set the professor image
            // const imageElement = document.querySelectorAll(".inner-box2 img")[index];
            // imageElement.src = professorImageUrl;

            // Set the professor name
            const nameElement = document.querySelectorAll(".inner-box2 h3")[index];
            nameElement.textContent = professorName;

            // Set the professor email
            const emailElement = document.querySelectorAll(".inner-box2 p")[index];
            emailElement.textContent = "Email: " + professorEmail;

            // Set the professor areas of study
            const areasOfStudyElement = document.querySelectorAll(".inner-box2 ul")[index];
            professorAreasOfStudy.forEach(areaOfStudy => {
                const liElement = document.createElement("li");
                liElement.textContent = areaOfStudy;
                areasOfStudyElement.appendChild(liElement);
            });
        });
    })
    .catch(error => console.error(error));

function selectRandomProfessors(professors, num) {
  const selectedProfessors = [];
  const shuffledProfessors = professors.sort(() => 0.5 - Math.random());
  for (let i = 0; i < num; i++) {
    selectedProfessors.push(shuffledProfessors[i]);
  }
  return selectedProfessors;
}
