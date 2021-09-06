const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var userModel = require("../models/user");
var checkAuth = require("../middleware/Auth");

const UserControllers = require("../controller/user");
// add bcrypt
const bcrypt = require("bcrypt");
// jwt token require
var jwt = require("jsonwebtoken");

const { options } = require("../app");

// login post method
router.post("/login",UserControllers.login);

// signup post method 
router.post("/signup", UserControllers.signup);

module.exports = router;

     
//
// router.post("/", (req, res, next) => {
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//       return res.status(500).json({
//         error: err,
//       });
//     } else {
//       const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         username: req.body.username,
//         password: hash,
//         email: req.body.email,
//         phone: req.body.phone,
//         userType: req.body.userType,
//       });
//       user
//         .save()
//         .then((result) => {
//           res.status(200).json({
//             new_user: result,
//           });
//         })
//         .catch((err) => {
//           res.status(500).json({
//             error: err,
//           });
//         });
//     }
//   });
// });
