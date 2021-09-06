const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    index: { unique: true },
    match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  phone: { type: Number, required: true, index: { unique: true } },
  //   userType: String,
});
 
var userModel = mongoose.model("User", userSchema);
module.exports=userModel;