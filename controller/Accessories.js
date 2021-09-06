var AccessModel = require("./../models/Accessories");
const mongoose = require("mongoose");



// get method of Rent File
exports.getAccess = (req, res, next) => {
  AccessModel.find()
    .select(
      "title price brand location categories description image phone Date"
    )
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "OKKKKKKK",
        results: data,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

// get method od id for file
exports.getAccessId = (req, res, next) => {
  const _id = req.params.id;
  AccessModel.findById(_id)
    .then((result) => {
      res.status(200).json({
        student: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.AccessAdd = (req, res, next) => {
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var categories = req.body.categories;
  var description = req.body.description;
  var phone = req.body.phone;
  var image = req.body.image;
  var Date = req.body.Date;

  var rentDetails = new AccessModel({
    _id: mongoose.Types.ObjectId(),
    title: title,
    price: price,
    brand: brand,
    location: location,
    description: description,
    phone: phone,
    categories: categories,
    image: "uploads/1629692031607helmete.jpg",
    Date: Date,
  });
  if (req.files) {
    let path = "";
    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));
    rentDetails.image = path;
  }
  rentDetails
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Accessories Add Upload Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

// Put method of rent file
exports.AccessPut = (req, res, next) => {
  var id = req.params.id;
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var categories = req.body.categories;
  var description = req.body.description;

  AccessModel.findById(id, function (err, data) {
    data.title = title ? title : data.title;
    data.price = price ? price : data.price;
    data.brand = brand ? brand : data.brand;
    data.location = location ? location : data.location;
    data.categories = categories ? categories : data.categories;
    data.description = description ? description : data.description;
    data
      .save()
      .then((doc) => {
        res.status(201).json({
          message: "Rent Add Updated Successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
// Patch method for Rent file
exports.AccessPatch = (req, res, next) => {
  var id = req.body._id;
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var categories = req.body.categories;
  var description = req.body.description;

  AccessModel.findById(id, function (err, data) {
    data.title = title ? title : data.title;
    data.price = price ? price : data.price;
    data.brand = brand ? brand : data.brand;
    data.location = location ? location : data.location;
    data.categories = categories ? categories : data.categories;
    data.description = description ? description : data.description;

    data
      .save()
      .then((doc) => {
        res.status(201).json({
          message: "Rent Add Patch Updated Successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

// DElete method for Rent file

exports.AccessDelete = (req, res, next) => {
  // var id = req.body.id;
  var id = req.params.id;
  AccessModel.findByIdAndRemove(id)
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
