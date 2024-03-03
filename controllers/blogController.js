// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((response) => {
      res.render("index", { title: "Home", blogs: response });
    })
    .catch((err) => console.log(err));
  // res.sendFile("./view/home.html", { root: __dirname });
  // res.render("index", { title: "Home", blogs });
};

const blog_details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("blog", { title: "Blog Details", blog: result });
    })
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
};

const blog_add = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const blog_create_post = (req, res) => {
  res.render("create", { title: "Create Post" });
};

module.exports = {
  blog_index,
  blog_details,
  blog_delete,
  blog_add,
  blog_create_post,
};
