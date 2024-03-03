const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouters = require("./routes/blogRoutes");
const homeRouter = require("./routes/homeRoute");

// const { result } = require("lodash");

// Express app
const app = express();

// Connect to mongodb
const dbURI =
  "mongodb+srv://user:pass@node.uxgxzan.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=node";

mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("Connected to db");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

// Middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// urlencoded => passing all the url sent, an transofrm it to object
app.use(morgan("dev"));

// Home page router
app.use(homeRouter);

// About page
app.get("/about", (req, res) => {
  // res.sendFile("./view/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// Blog router
app.use(blogRouters);

// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./view/404.html", { root: __dirname });
  res.status(404).render("404", { title: "Page not found" });
});
