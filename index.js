import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// get routes for page naivigation
app.get("/", (req, res) => {
  res.render("index.ejs");
})

app.get("/about", (req, res) => {
  res.render("about.ejs");
})

app.get("/discussion", (req, res) => {
  res.render("discussion.ejs");
})

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

// main page
// post route for correlation submission
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("index.ejs", { message: "Form submitted successfully!" });
})


// discussion page
// post route for discussion post submission
const posts = [];

// add posts to display them
app.post("/discussion", (req, res) => {
  req.body.id = posts.length; // Assign an ID to the post

  posts.push(req.body);

  res.render("discussion.ejs", {
    message: "Post submitted successfully!",
    posts: posts,
  });
})

// delete and edit post route
app.delete("/discussion", (req, res) => {
  console.log("Delete/edit post request received");
  const typeOfRequest = Object.keys(req.body)[0].at(0); // Get the type of request ('e' edit or 'd' delete)

  
  const postId = Object.keys(req.body)[0].at(-1); // Get the post ID from the request body

  // if (typeOfRequest === "e") {
  //   const postToEdit = req.body[postId];
  //   console.log("req.body inside if:", req.body)
  //   console.log("Editing post:", postToEdit);
  // }
  const postToEdit = posts.splice(postId, 1, null); // Remove the post from the array
  console.log("Post to edit:", postToEdit[0]);

  if (typeOfRequest === "e") {
    console.log("Edit post request received");
    res.render("discussion.ejs", {
      message: "Please edit your original post!",
      posts: posts,
      edit: true,
      postToEdit: postToEdit[0], // pass the post to edit
    });
    
  } else if (typeOfRequest === "d") {
    console.log("Delete post request received");
    res.render("discussion.ejs", {
      message: "Post deleted successfully!",
      posts: posts,
    });
  }

  // res.render("discussion.ejs", {
  //   message: "Post deleted successfully!",
  //   posts: posts,
  // })

})

// edit post route
// app.delete("/discussion", (req, res) => {
//   console.log("Edit post request received");
//   const postId = Object.keys(req.body)[0].at(-1); // Get the post ID from the request body

//   posts.splice(postId, 1, null); // Remove the post from the array

//   // res.redirect("/discussion");
//   res.render("discussion.ejs", {
//     message: "Post deleted successfully!",
//     posts: posts,
//     edit: true
//   });
// })





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})