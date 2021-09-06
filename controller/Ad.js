var AdModel = require("./../models/Ad");
const mongoose = require("mongoose");
const path = require("path");



// Get method of Ad File
exports.getAd = (req, res, next) => {
  AdModel.find()
    .select(
      "title price brand location model condition description millage phone adImage[] image Date"
    )
    .exec()
    .then((data) => {
      // console.log("data", data);
      res.status(200).json({
        message: "OKKKKKKK",
        results: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
};


// get method ny id through Ad File
exports.idAd = (req, res, next) => {
  console.log("req", req.body);
  const _id = req.params.id;
  AdModel.findById(_id)
  
    .then((result) => {
      res.status(200).json({
        Ad: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// Date.prototype.addHours = function (h) {
//   this.setTime(this.getTime() + h * 60 * 60 * 1000);
//   return this;
// };

//  Post method of Ad File
exports.add = (req, res, next) => {
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var model = req.body.model;
  var condition = req.body.condition;
  var description = req.body.description;
  var millage = req.body.millage;
   var phone = req.body.phone;
  var Date = req.body.Date;
  var image = req.body.image;
//   console.log("req", req);
//   console.log("req.body", req.body);
// console.log("req.files", req.files);
  var adDetails = new AdModel({
    _id: mongoose.Types.ObjectId(),
    title: title,
    price: price,
    brand: brand,
    location: location,
    model: model,
    condition: condition,
    description: description,
    millage: millage,
    phone: phone,
    image: "uploads/1618412472229rentadimage.jpg",
    Date: Date,
  });

  // if (req.files) {

  //   let path = "";
  //   req.files.forEach(function (files, index, arr) {
  //     path = path + files.path + ",";
  //   });
  //   path = path.substring(0, path.lastIndexOf(","));
  //   adDetails.image = path;
  //   adDetails.image = "uploads/1618412472229rentadimage.jpg";
  // }
  adDetails
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "product add successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};


// Put method in Ad File

exports.adPut = (req, res, next) => {
  var id = req.params.id;
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var description = req.body.description;
   var millage = req.body.millage;
  var model = req.body.model;
  var condition = req.body.condition;

  AdModel.findById(id, function (err, dataa) {
    dataa.title = title ? title : dataa.title;
    dataa.price = price ? price : dataa.price;
    dataa.brand = brand ? brand : dataa.brand;
    dataa.location = location ? location : dataa.location;
    dataa.model = model ? model : dataa.model;
    dataa.condition = condition ? condition : dataa.condition;
        dataa.millage = millage ? millage : dataa.millage;
      dataa.description = description ? description : dataa.description;

    dataa
      .save()
      .then((doc) => {
        res.status(201).json({
          message: " Add Updated Successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};



// PAtch method by Ad File
exports.adPatch = (req, res, next) => {
  var id = req.body._id;
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
    var description = req.body.description;
  var model = req.body.model;
   var millage = req.body.millage;
  var condition = req.body.condition;

  AdModel.findById(id, function (err, dataaa) {
    dataaa.title = title ? title : dataaa.title;
    dataaa.price = price ? price : dataaa.price;
    dataaa.brand = brand ? brand : dataaa.brand;
    dataaa.location = location ? location : dataaa.location;
    dataaa.model = model ? model : dataaa.model;
    dataaa.condition = condition ? condition : dataaa.condition;
     dataaa.millage = millage ? millage : dataaa.millage;
     dataaa.description = description ? description : dataaa.description;

    dataaa
      .save()
      .then((doc) => {
        res.status(201).json({
          message: " Add Patch Updated Successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};


// delete method by Ad File

exports.adDel = (req, res, next) => {
  // var id = req.body.id;
  var id = req.params.id;
  AdModel.findByIdAndRemove(id)
    .then((doc) => {
      res.status(201).json({
        message: " product deleted successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};



// exports.adDel = (req, res, next) => {
//   AdModel.remove({ _id: req.params.id })
//     .then((result) => {
//       res.status(200).json({
//         message: "Addddddddddddddd deletedddddd",
//         result: result,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };
