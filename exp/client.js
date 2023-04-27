const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value
  };
  const jsonData = JSON.stringify(data);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit-data");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(jsonData);
});
