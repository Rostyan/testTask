var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config/config'); // get config file

var Post = require('../model/post');
var User = require('../model/user')

router.get('/', function (req, res) {
  //Get all post
  Post.find({}, function (err, posts) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(posts);
  });
});

router.post('/addNewPost', function (req, res) {
  //Create new post
  Post.create({
    name: req.session.user.name,
    post: req.body.post
  },
    function (err, post) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(post);
    });
});


router.post('/login', function(req, res) {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
    res.redirect("/");

  });

});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
  res.redirect('/login');
});

router.post('/register', function(req, res) {
  //Register new user

  User.create({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
  },
    
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user`.");

    // if user is registered without errors
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
    res.redirect("/login");

  });

});

module.exports = router
