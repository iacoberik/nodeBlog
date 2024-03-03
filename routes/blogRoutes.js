const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

// Displaying create blog
router.get("/blogs/create", blogController.blog_create_post);

// Displaying single page BLOG
router.get("/blogs/:id", blogController.blog_details);

// Adding blogs to db
router.post("/blogs", blogController.blog_add);

// Deleting blog post from db
router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
