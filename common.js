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
    run: () => {
        var firstname = document.getElementById("firstname")
        var lastname = document.getElementById("lastname")
        var jsonBtn = document.getElementById("jsonbtn")

        jsonBtn.addEventListener("click", function(){
            var data = [firstname.value, lastname.value];
            app.getPosts();
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
