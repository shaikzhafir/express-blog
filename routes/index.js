var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");
const matter = require("gray-matter");
const posts = [];
const reviews = [];

const postDir = fs.readdirSync(path.resolve(__dirname, "../posts"));
postDir.forEach((post) => {
  const postData = matter.read(path.resolve(__dirname, `../posts/${post}`));
  posts.push({
    title: postData.data.title,
    slug: postData.data.slug,
    id: postData.data.id,
  });
});

const reviewDir = fs.readdirSync(path.resolve(__dirname, "../reviews"));
console.log(reviewDir);
reviewDir.forEach((review) => {
  const reviewData = matter.read(
    path.resolve(__dirname, `../reviews/${review}`)
  );
  console.log(reviewData);
  reviews.push({
    title: reviewData.data.title,
    isbn: reviewData.data.isbn,
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "The Bolg", posts: posts, reviews: reviews });
});

module.exports = router;
