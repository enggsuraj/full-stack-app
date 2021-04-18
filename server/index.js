const path = require("path");
const express = require("express");
const app = express();

// GET, POST, PUT, PATCH, DELETE

// this parses POST bodies as JSON
app.use(express.json());

// our database
const posts = [
  {
    id: 0,
    post: "Setting up my social media!",
    timestamp: new Date(2002, 3, 7),
    username: "Jack",
  },
];

// 1. Add an incrementing id to new posts
// 2. Add an endpoint to delete a post by id `DELETE /api/posts/:id`

let id = 1; 
app.post("/api/posts", function (req, res) {
  const post = req.body.post;
  const username = req.body.username;
  const newPost = {
      id: id,
      post: post,
      username: username,
      timestamp: new Date(),
    };
    id++;
    posts.push(newPost);
    return res.json(newPost);
});
/*
There are a few ways for information/data to be passed in with a request:
1. On the body of a request
2. In a URL parameter
3. In a query string
*/

/**
 * This endpoint specifies that a parameter in the position of
 * :id will get added to req.params.id
 */
app.delete("/api/posts/:id", function (req, res) {
    const id = parseInt(req.params.id); // all parameters come through as strings, you have to parse it yourself accordingly

    const postIndex = posts.findIndex(post => post.id === id);
    posts.splice(postIndex, 1);

    return res.json({ id });
});

// Post Functionality
app.get("/api/posts", function (req, res) {
  return res.json(posts);
  // res.send(JSON.stringify([]))
});

// Handle an HTTP GET request to /
const publicAssets = path.join(__dirname, "../public");
console.log("Serving public assets from ", publicAssets);
app.use(express.static(publicAssets));

// This makes the server start listening to HTTP requests on port 4000
app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
