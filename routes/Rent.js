var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var rentModel = require("../models/Rent");
const upload = require("../middleware/uploadRent");
var checkRent = require("../middleware/Rent");
const rentControllers = require('../controller/Rent')
// var getRentCat = rentModel.find({},{'name':1, '_id':0});


// GET data All
router.get("/getRent",   rentControllers.getRent);

//  GET data from ID
router.get("/:id", rentControllers.getRentId);

// POST AD METHOD
router.post(
  "/addRent", upload.array("rentImage"), rentControllers.addRent );

// rent Put method
router.put("/rentPut/:id", checkRent, rentControllers.rentPut);

// patch method
router.patch("rentPatch/:id", checkRent, rentControllers.rentPatch);

// delete method
router.delete("/rentDel/:id", rentControllers.rentDel);



module.exports = router;
