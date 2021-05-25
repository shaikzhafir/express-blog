var express = require("express");
var path = require("path");
var fs = require("fs");
var marked = require("marked");
const matter = require("gray-matter");
var router = express.Router();
const Review = require('./classes/Review')

/* GET home page. */
router.get("/:isbn", function (req, res, next) {
    
  const reviewData = matter.read(
    path.resolve(__dirname, `../reviews/${req.params.isbn}.md`)
  );
  console.log(reviewData);
  
  //only use content from md file to display, other variables for description purposes
  var content = marked(reviewData.content);
  const review = new Review(reviewData,content)
  res.render("review", review.getData());
});

module.exports = router;
