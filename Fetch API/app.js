document.getElementById("btn1").addEventListener('click', getText);
document.getElementById("btn2").addEventListener('click', getJson);
document.getElementById("btn3").addEventListener('click', getExternal);

// Get Local Text
function getText(e) {
    fetch("test.txt")
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}
// Get Local Json
function getJson(e) {
    fetch("posts.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = ''
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Get External API DATA

function getExternal(e) {
    fetch("https://api.github.com/users")
        .then(function (res) {
            return res.json();
        }).then(function (users) {
            let output = "";
            users.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        }).catch(function (err) {
            console.log(err);
        });
}