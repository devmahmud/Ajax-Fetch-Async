document.getElementById("btn1").addEventListener('click', getText);
document.getElementById("btn2").addEventListener('click', getJson);
document.getElementById("btn3").addEventListener('click', getExternal);

// Get Local Text
function getText(e) {
    fetch("test.txt")
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}
// Get Local Json
function getJson(e) {
    fetch("posts.json")
        .then(res => res.json())
        .then(data => {
            let output = ''
            data.forEach(post => {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => console.log(err));
}

// Get External API DATA

function getExternal(e) {
    fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(users => {
            let output = "";
            users.forEach(user => {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(err=>console.log(err));
}