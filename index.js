import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import dotenv from "dotenv";
import pg from "pg";


const app = express();
const port = process.env.PORT || 3000;
dotenv.config();


const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



// get routes for page naivigation
app.get("/", async (req, res) => {
  let parameters = [];
  try {
     let result = await db.query('SELECT "ID", "Name" FROM parameters ORDER BY "Basic_category", "Subcategory"');
     parameters = result.rows;
  } catch (err) {
    console.log(err);
  }
  

  res.render("index.ejs", {
    parameters
  });
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

  const postToEdit = posts.splice(postId, 1, null); // Remove the post from the array

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

})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})