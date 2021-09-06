const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  location: { type: String, required: true },
  model: { type: Number, required: true },
  phone: { type: Number, required: true },
  description: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});
var rentModel = mongoose.model("Rent", rentSchema);
module.exports = rentModel;
