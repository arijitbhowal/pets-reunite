const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  petStatus: { type: String },
  type: { type: String },
  sex: { type: String },
  petName: { type: String },
  lastSeenAdd: { type: String },
  email: { type: String },
  lastSeenDate: { type: Date },
  description: { type: String },
  reportImage: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  userName: { type: String }, 
  userId: { type: String },

},
{ timestamps: true });

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
