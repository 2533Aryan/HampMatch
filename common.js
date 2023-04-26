const app = {
    baseURL: 'professor.json',
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log('HTML loaded');
    },
    load: () => {
        //the page had finished loading its HTML
        app.showLoading();
        app.getData();
    },
    showLoading: () => {
        let ul = document.querySelector('.list');
        let li = document.createElement('li');
        li.textContent = 'Loading...';
        li.className = 'loading-list';
        ul.appendChild(li);
    },
    getData: () => {
        //based on the current page...
        let page = document.body.id;
        switch (page) {
            case 'posts':
                app.getPosts();
                //add custom event listeners for posts page
                break;
            case 'users':
                app.run();
                // app.getUsers();
                //add custom event listeners for users page
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
    getUsers: () => {
        let url = app.baseURL;
        let req = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });
        fetch(req)
            .then(resp => resp.json())
            .then(app.showUsers)
            .catch(app.err);
    },
    run: () => {
        var firstname = document.getElementById("firstname")
        var lastname = document.getElementById("lastname")
        var jsonBtn = document.getElementById("jsonbtn")
        var jsonText = document.getElementById("jsontext")



        jsonBtn.addEventListener("click", function(){
            var data = {
                "firstName":firstname.value,
                "lastName":lastname.value
            }
            jsonData = JSON.stringify(data);
            jsonText.innerHTML = jsonData;

            // function download(content, fileName, contentType) {
            //     var a = document.createElement("a");
            //     var file = new Blob([content], {type: contentType});
            //     a.href = URL.createObjectURL(file);
            //     a.download = fileName;
            //     a.click();
            // }
            // download(jsonData, 'json.txt', 'text/plain');

            const fs = require('fs');
            const fileName = './data.json';
            const file = require(fileName);
                
            file.key = "new value";
                
            fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
              if (err) return console.log(err);
              console.log(JSON.stringify(file));
              console.log('writing to ' + fileName);
            });
        })
    },
    showPosts: (posts) => {
        //remove the loading li
        let ul = document.querySelector('.list');
        ul.innerHTML = '';
        // create a list with the post data
        let df = document.createDocumentFragment();
        //console.log(posts);
        posts.professors.forEach(post => {
            let li = document.createElement('li');
            li.textContent = post.first_name;
            li.setAttribute('data-id', post.first_name);
            df.appendChild(li);
        });
        ul.appendChild(df);
    },
    showUsers: (users) => {
        //remove the loading li
        let ul = document.querySelector('.list');
        ul.innerHTML = '';
        // create a list with the user data
        let df = document.createDocumentFragment();
        console.log(users);
        users.forEach(user => {
            let li = document.createElement('li');
            li.textContent = user.email;
            li.setAttribute('data-id', user.id);
            df.appendChild(li);
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