const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petStatus: String,
  type: String,
  sex: String,
  petName: String,
  lastSeenAdd: String,
  email: String,
  lastSeenDate: String,
  description: String,
  reportImage: String, // Assuming you store image path or URL
  lat: Number,
  long: Number,
},{timestamp:true});

module.exports = Pet = mongoose.model("Pet", petSchema);
