var express = require("express");
var path = require("path");
var fs = require("fs");
var marked = require("marked");
const matter = require("gray-matter");
var router = express.Router();
const Post = require('./classes/Post');

/* GET home page. */
router.get("/:postID", function (req, res, next) {
  const postData = matter.read(
    path.resolve(__dirname, `../posts/${req.params.postID}.md`)
  );
  //only use content from md file to display, other variables for description purposes
  var content = marked(postData.content);
  const post = new Post(postData,content)
  res.render("article", post.getData());
});

module.exports = router;
