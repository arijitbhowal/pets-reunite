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
  latitude: Number,  // Change from lat to latitude
  longitude: Number, // Change from long to longitude
}, { timestamps: true });

module.exports = mongoose.model("Pet", petSchema);
