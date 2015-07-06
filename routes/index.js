var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var db = require('monk')('localhost/nodeblog');

// Home page blog posts
router.get('/', function(req, res, next) {
    var db = req.db;
    var posts = db.get('posts');
    posts.find({}, {}, function(err, posts){
        if(err) throw err;
        res.render('index', {'posts': posts});
    });
});

module.exports = router;
