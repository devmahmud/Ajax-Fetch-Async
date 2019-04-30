http = new EasyHTTP();


// Get all users

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=> console.log(err));


// Create a user

user = {
    "name": "Mahmudul Alam",
    "username": "mahmud",
    "email": "expelmahmud@gmail.com"
}

// http.post('https://jsonplaceholder.typicode.com/users',user)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// Create a PUT Request

// http.put('https://jsonplaceholder.typicode.com/users/2',user)
// .then(data => console.log(data))
// .catch(err=> console.log(err));


// Make a DELETE Request

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(res=>console.log(res))
.catch(err => console.log(err));



