
// const url = "professor.json";

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         // Select three random professors
//         const selectedProfessors = selectRandomProfessors(data.professors, 3);

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

// function selectRandomProfessors(professors, num) {
//     const selectedProfessors = [];
//     const shuffledProfessors = professors.sort(() => 0.5 - Math.random());
//     for (let i = 0; i < num; i++) {
//         selectedProfessors.push(shuffledProfessors[i]);
//     }
//     return selectedProfessors;
// }


// import { writeFile } from 'fs'; // require the Node.js file system module

// function getStudentData(){
    
    
//     // select the input fields by their name attribute
//     const nameInput = document.querySelector('input[name="Name"]');
//     const emailInput = document.querySelector('input[name="Email"]');
//     const yearInput = document.querySelector('input[name="Year"]');
//     const area1Input = document.querySelector('input[name="Area1"]');
//     const area2Input = document.querySelector('input[name="Area2"]');
//     const area3Input = document.querySelector('input[name="Area3"]');

//     // create a JSON object with the data from the input fields
//     const data = {
//         name: nameInput.value,
//         email: emailInput.value,
//         year: yearInput.value,
//         areas: [area1Input.value, area2Input.value, area3Input.value]
//     };


//     // write the JSON object to the students.json file
//     const student = JSON.stringify(data); // convert the object to a JSON string

//     writeFile('students.json', student, 'utf8', function(err) {
//         if (err) {
//             console.log('Error writing file:', err);
//         } else {
//             console.log('Student data saved to students.json');
//         }
//     });
    
    
    // // add an event listener to the submit button if it exists
    // const submitButton = document.querySelector('button');
    // if (submitButton) {
    //     submitButton.addEventListener('click', function(event) {

    //         event.preventDefault(); // prevent the default form submission

    //     });
    // } else {console.log('Error: Submit button not found.');
    // }

// }


// function storeData(data){
//     data = "H";
    
//     writeFile('example.txt', data, 'utf8', function(err) {
//         if (err) {
//             console.log('Error writing file:', err);
//         } else {
//             console.log('Student data saved to students.json');
//         }
//     });

// }

// // select the input fields by their name attribute
// const nameInput = document.querySelector('input[name="Name"]');
// const emailInput = document.querySelector('input[name="Email"]');
// const yearInput = document.querySelector('input[name="Year"]');
// const area1Input = document.querySelector('input[name="Area1"]');
// const area2Input = document.querySelector('input[name="Area2"]');
// const area3Input = document.querySelector('input[name="Area3"]');



// // add an event listener to the submit button if it exists
// const submitButton = document.querySelector('#submit button');
// if (submitButton) {
//   submitButton.addEventListener('click', function(event) {
//     event.preventDefault(); // prevent the default form submission
    
//     // create a JSON object with the data from the input fields
//     const data = {
//       name: nameInput.value,
//       email: emailInput.value,
//       year: yearInput.value,
//       areas: [area1Input.value, area2Input.value, area3Input.value]
//     };
    
//     console.log(1)
//     // // write the JSON object to the students.json file
//     // const json = JSON.stringify(data); // convert the object to a JSON string
//     // fs.writeFile('students.json', json, 'utf8', function(err) {
//     //   if (err) {
//     //     console.log('Error writing file:', err);
//     //   } else {
//     //     console.log('Student data saved to students.json');
//     //   }
//     // });
//   });
// } else {
//   console.log('Error: Submit button not found.');
// }

function getStudentData(){

    // Get the HTML form input elements
    const nameInput = document.querySelector('input[name="Name"]');
    const emailInput = document.querySelector('input[name="Email"]');
    const yearInput = document.querySelector('input[name="Year"]');
    const area1Input = document.querySelector('input[name="Area1"]');
    const area2Input = document.querySelector('input[name="Area2"]');
    const area3Input = document.querySelector('input[name="Area3"]');

    // Create a JSON object with the form data
    const data = {
        name: nameInput.value,
        email: emailInput.value,
        year: yearInput.value,
        areas: [area1Input.value, area2Input.value, area3Input.value]
    };

    // Send the JSON object to the server using a POST request
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Form data submitted successfully');
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error(error);
    });
}