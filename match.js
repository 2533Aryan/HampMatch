const url = "professor.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Select three random professors
        const selectedProfessors = matchProfessors("Computer Science", "Math", "Animation", data.professors)
        //selectRandomProfessors(data.professors, 3);

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

// function selectRandomProfessors(professors, num) {
//     const selectedProfessors = [];
//     const shuffledProfessors = professors.sort(() => 0.5 - Math.random());
//     for (let i = 0; i < num; i++) {
//         selectedProfessors.push(shuffledProfessors[i]);
//     }
//     return selectedProfessors;
// }


// Algorithm to match professor
function matchProfessors(interest1, interest2, interest3, professorData) {
    // const selectedProfessors = [];
    // const shuffledProfessors = professorData.sort(() => 0.5 - Math.random());
    // for (let i = 0; i < 3; i++) {
    //     selectedProfessors.push(shuffledProfessors[i]);
    // }
    // console.log(professorData[0].area_of_study_1)
    // return selectedProfessors;

    const matchingProfessors = [];
  
    professorData.forEach((professor) => {
      let score = 0;
      if (professor.area_of_study_1.includes(interest1.toLowerCase())) {
        score += 3;
      }
      if (professor.area_of_study_2.includes(interest2).toLowerCase()) {
        score += 2;
      }
      if (professor.area_of_study_3.includes(interest3).toLowerCase()) {
        score += 1;
      }
      professor.score = score;
      matchingProfessors.push(professor);
    });
  
    matchingProfessors.sort((a, b) => b.score - a.score);
  
    return matchingProfessors.slice(0, 3);
  }

