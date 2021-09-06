const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  location: { type: String, required: true },
  model: { type: Number, required: true },
  condition: { type: String, required: true },
  description: { type: String, required: true },
  millage: { type: String, required: true },
  phone: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  Date: { type: Date, default: Date.now },
});

var AdModel = mongoose.model("Ad", AdSchema);
module.exports = AdModel;
