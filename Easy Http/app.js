const http = new easyHttp();

// Make and Http GET request
/*
http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
*/

// Get Single Post
/*
http.get('https://jsonplaceholder.typicode.com/posts/2', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
*/

/*
const data = {
    userId: 2,
    title: "New custom tilte",
    body: "New custom body and few text added"
};
*/
// Create post
/*
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
*/

// Update post
/*
http.put('https://jsonplaceholder.typicode.com/posts/2', data, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
*/

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});