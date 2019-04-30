document.getElementById('get-jokes').addEventListener('click', loadJokes);

function loadJokes(e) {

    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function (val) {
                    output += `<li>${val.joke}</li>`;
                });

            } else {
                output += "<li>Sorry!! Something Went Wrong...</li>"
            }
            document.querySelector(".output").innerHTML = output;
        }

    }

    xhr.send();

    e.preventDefault();
}