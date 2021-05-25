var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");
const matter = require("gray-matter");
const helper = require('./helper')
const Review = require('./classes/Review')
const Post = require('./classes/Post')
const posts = [];
const reviews = [];

// takes in a path, and iterates through every path, and push  into a posts array

/* const postDir = fs.readdirSync(path.resolve(__dirname, "../posts"));
postDir.forEach((post) => {
  const postData = matter.read(path.resolve(__dirname, `../posts/${post}`));
  posts.push({
    title: postData.data.title,
    slug: postData.data.slug,
    id: postData.data.id,
  });
}); */

helper.pathExtractor("../posts",posts,Post)

helper.pathExtractor("../reviews",reviews,Review)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "The Bolg", posts: posts, reviews: reviews });
});

module.exports = router;
