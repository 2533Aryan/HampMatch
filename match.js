const profInterest1 = "0";
const profInterest2 = "0";
const profInterest3 = "0";


function getData(){
  profInterest1 = document.querySelector('input[type="text"][name="Area1"]').value;
  profInterest2 = document.querySelector('input[type="text"][name="Area2"]').value;
  profInterest3 = document.querySelector('input[type="text"][name="Area3"]').value;
  return profInterest1, profInterest2, profInterest3;
}


const url = "professor.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Select three random professors
        console.log(profInterest1);
        const selectedProfessors = matchProfessors(profInterest1, profInterest2, profInterest3, data.professors)

        // Display the selected professors
        selectedProfessors.forEach((professor, index) => {
            const professorName = professor.first_name + " " + professor.last_name;
            const professorImageUrl = professor.image;
            const professorEmail = professor.email_id;
            const professorAreasOfStudy = [
                professor.area_of_study_1,
                professor.area_of_study_2,
                professor.area_of_study_3
            ];

            // Set the professor image
            const imageElement = document.querySelectorAll("img")[index];
            imageElement.src = professorImageUrl;

            // Set the professor name
            const nameElement = document.querySelectorAll(".prof-name")[index];
            nameElement.textContent = professorName;

            // // Set the professor areas of study
            const areasOfStudyElement = document.querySelectorAll(".prof-area")[index];
            professorAreasOfStudy.forEach(areaOfStudy => {
                const liElement = document.createElement("li");
                liElement.textContent = areaOfStudy;
                areasOfStudyElement.appendChild(liElement);
            });

            // Set the professor email
            const emailElement = document.querySelectorAll(".email-content")[index];
            emailElement.textContent = professorEmail;
        });
    })
    .catch(error => console.error(error));



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
    console.log(matchingProfessors);
    return matchingProfessors.slice(0, 3);
  }
