// const matchButton = document.querySelector('#match-button');
// const area1Input = document.querySelector('input[name="Area1"]');
// const area2Input = document.querySelector('input[name="Area2"]');
// const area3Input = document.querySelector('input[name="Area3"]');


// const url = "professor.json";


// matchButton.addEventListener('click', event => {
//     event.preventDefault();

//     const area1 = keywordsInput.value.trim().toLowerCase();
//     const area2 = locationInput.value.trim().toLowerCase();
//     const area3 = keywordsInput.value.trim().toLowerCase();


//     fetch(url)
//     .then(response => response.json())
//     .then(professors => {
//         // Filter the jobs by keywords and location
//         const filteredProfessors = professors.filter(professor => {
//             return (
//                 professor.area_of_study_1.toLowerCase().includes(area1) &&
//                 professor.area_of_study_2.toLowerCase().includes(area2) &&
//                 professor.area_of_study_3.toLowerCase().includes(area3) 
//             );
//         });

//         // Generate and append the elements for the filtered jobs
//         filteredProfessors.forEach(generateProfessorElement);
//     });
// });


// function generateProfessorElement(professor) {
//     // Display the selected professors
//     const professorName = professor.first_name + " " + professor.last_name;
//     const professorImageUrl = professor.image;
//     const professorEmail = professor.email_id;
//     const professorAreasOfStudy = [
//         professor.area_of_study_1,
//         professor.area_of_study_2,
//         professor.area_of_study_3
//     ];

//     // Set the professor image
//     const imageElement = document.querySelectorAll("img")[index];
//     imageElement.src = professorImageUrl;

//     // Set the professor name
//     const nameElement = document.querySelectorAll(".prof-name")[index];
//     nameElement.textContent = professorName;

//     // // Set the professor areas of study
//     const areasOfStudyElement = document.querySelectorAll(".prof-area")[index];
//     professorAreasOfStudy.forEach(areaOfStudy => {
//         const liElement = document.createElement("li");
//         liElement.textContent = areaOfStudy;
//         areasOfStudyElement.appendChild(liElement);
//     });

//     // Set the professor email
//     const emailElement = document.querySelectorAll(".email-content")[index];
//     emailElement.textContent = professorEmail;
// }
 
const url = "professor.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Select three random professors
        const selectedProfessors = selectRandomProfessors(data.professors, 3);

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

function selectRandomProfessors(professors, num) {
    const selectedProfessors = [];
    const shuffledProfessors = professors.sort(() => 0.5 - Math.random());
    for (let i = 0; i < num; i++) {
        selectedProfessors.push(shuffledProfessors[i]);
    }
    return selectedProfessors;
}