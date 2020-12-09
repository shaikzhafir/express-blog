var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require('fs');
const matter = require("gray-matter");
const posts = []

const postDir = fs.readdirSync(path.resolve(__dirname,'../posts'));
postDir.forEach(post => {
  const postData = matter.read(path.resolve(__dirname, `../posts/${post}`));
  posts.push({
    title : postData.data.title,
    slug : postData.data.slug,
    id : postData.data.id
  })
});

console.log(posts);


//console.log(posts);

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index',
   { title: 'The Bolg',
     posts : posts});
});

module.exports = router;
