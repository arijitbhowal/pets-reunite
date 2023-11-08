const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  status: String, // e.g., "Lost" or "Found"
  type: String, // e.g., "Dog" or "Cat"
  sex: String, // e.g., "Male" or "Female"
  petName: String, // Pet name or "Unknown" if not provided
  lastSeenAdd: String, // Last seen address
  email: String, // Contact email
  lastSeenDate: Date, // Last seen date
  description: String, // Detailed description
  reportImage: String,
});

module.exports = Pet = mongoose.model("Pet", petSchema);
