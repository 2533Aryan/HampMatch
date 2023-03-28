// const holder = document.querySelector("button")

// function pageTwo() {
    
// }

// addEventListener('click', pageTwo)

const url = "professor.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const professorsList = document.getElementById("professors-list");
    let professorsHtml = "<ul>";
    data.professors.forEach(professor => {
      const professorHtml = `
        <li>
          <h2>${professor.first_name} ${professor.last_name}</h2>
          <p><strong>Area of Study:</strong> ${professor.area_of_study_1}, ${professor.area_of_study_2}, ${professor.area_of_study_3}</p>
          <p><strong>Email:</strong> ${professor.email_id}</p>
        </li>
      `;
      professorsHtml += professorHtml;
    });
    professorsHtml += "</ul>";
    professorsList.innerHTML = professorsHtml;
  })
  .catch(error => console.error(error));
