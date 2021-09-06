var rentModel = require("./../models/Rent");
const mongoose = require("mongoose");

// get method of Rent File
exports.getRent = (req, res, next) => {
  rentModel
    .find()
    .select("title price brand location model description image phone date")
    .exec()
    .then((data) => {
      res.status(200).json({
        message: "OK",
        results: data,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};
// get method od id for file
exports.getRentId = (req, res, next) => {
  const _id = req.params.id;
  rentModel
    .findById(_id)
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

exports.addRent = (req, res, next) => {
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var model = req.body.model;
  var description = req.body.description;
   var phone = req.body.phone;
    var image = req.body.image;
  var date = req.body.date;

  var rentDetails = new rentModel({
    _id: mongoose.Types.ObjectId(),
    title: title,
    price: price,
    brand: brand,
    location: location,
    description: description,
    phone: phone,
    model: model,
    image: "uploads/1629692330111rentaaa.jpg",
    date: date,
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
        message: "Rent Add Upload Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

// Put method of rent file
exports.rentPut = (req, res, next) => {
  var id = req.params.id;
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var model = req.body.model;
  var description = req.body.description;

  rentModel.findById(id, function (err, data) {
    data.title = title ? title : data.title;
    data.price = price ? price : data.price;
    data.brand = brand ? brand : data.brand;
    data.location = location ? location : data.location;
    data.model = model ? model : data.model;
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
exports.rentPatch = (req, res, next) => {
  var id = req.body._id;
  var title = req.body.title;
  var price = req.body.price;
  var brand = req.body.brand;
  var location = req.body.location;
  var model = req.body.model;
  var description = req.body.description;

  rentModel.findById(id, function (err, data) {
    data.title = title ? title : data.title;
    data.price = price ? price : data.price;
    data.brand = brand ? brand : data.brand;
    data.location = location ? location : data.location;
    data.model = model ? model : data.model;
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

exports.rentDel = (req, res, next)=>{
// var id = req.body.id;
 var id = req.params.id;
rentModel.findByIdAndRemove(id)
.then(doc=>{
res.status(201).json({
    message: " product deleted successfully",
    results: doc
});
})
.catch(err=>{
res.json(err)

})
}





// exports.rentDel = (req, res, next) => {
//   rentModel
//     .remove({ _id: req.params.id })
//     .then((doc) => {
//       res.status(200).json({
//         message: "student deletedddddd",
//         result: doc,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };
