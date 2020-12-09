var express = require("express");
var path = require("path");
var fs = require("fs");
var marked = require("marked");
const matter = require("gray-matter");
var router = express.Router();

/* GET home page. */
router.get("/:postID", function (req, res, next) {
  const postData = matter.read(
    path.resolve(__dirname, `../posts/${req.params.postID}.md`)
  );
  //only use content from md file to display, other variables for description purposes
  var content = marked(postData.content);
  res.render("article", {
    title: postData.data.title,
    description : postData.data.slug,
    post: content,
    id: req.params.postID,
  });
});

module.exports = router;
