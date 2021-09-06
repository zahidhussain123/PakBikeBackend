const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var AdModel = require("../models/Ad");
const upload =require ('../middleware/uploads')
const AdControllers = require("../controller/Ad");
var checkAuth = require("../middleware/Rent");

// image upload multer
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb({ message: "Unsupported file format Only jpeg , jpg and png file supported" }, false);
//   }
// };

// var upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });
// get method
router.get("/", (req, res, next) => {
  res.json({
    message: "success",
  });
});

// get Method Ad
router.get("/getAd",  AdControllers.getAd);

//  GET data from ID
router.get("/:id",  AdControllers.idAd);

// post ad method
router.post("/add", AdControllers.add);

//  upload.array("adImage[]", 12),
// rent Put method
router.put("/adPut/:id",  AdControllers.adPut);

// patch method
router.patch("adPatch/:id", checkAuth, AdControllers.adPatch);

// delete method
router.delete("/adDel/:id",  AdControllers.adDel);

module.exports = router;
