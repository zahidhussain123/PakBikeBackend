var userModel = require("../models/user");
const mongoose = require("mongoose");
// add bcrypt
const bcrypt = require("bcrypt");
// jwt token require
var jwt = require("jsonwebtoken");

// login POST method for User File
exports.login = (req, res, next) => {
  var username = req.body.username;
  userModel
    .find({ username: username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        res.status(404).json({
          message: "Auth Failed",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          user[0].password,
          function (err, result) {
            if (err) {
              res.status(404).json({
                message: "Auth Failed 2 password",
              });
              
            }
            if (result) {
              var token = jwt.sign(
                {
                  username: user[0].username,
                  userid: user[0]._id,
                },
                "secret",
                {
                  expiresIn: "24h",
                }
              );
              res.status(200).json({
              
                message: "Login Successfully",
                token: token,
               
              });
              
            } else {
              res.status(404).json({
                message: "Plz Check Username or Password",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
};

// Signup POST method for User File
exports.signup = (req, res, nex) => {
  var username = req.body.username;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;
  if (password !== confirmPassword) {
    res.json({
      message: "Password Not Match!!",
    });
  } else {
    // bycrypy hash password method
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return res.json({
          message: "Something Wrong Try Later!",
          error: err,
        });
      } else {
        console.log(hash);
        var userDetails = new userModel({
          _id: mongoose.Types.ObjectId(),
          username: username,
          email: email,
          phone: phone,
          password: hash,
        });
        userDetails
          .save()
          .then((doc) => {
            res.status(201).json({
              message: "User Registered Successfully",
              results: doc,
            });
          })
          .catch((err) => {
            res.json({
              message: "Try Different USERNAME or EMAIL",
             
            });
          });
      }
    });
  }
};
