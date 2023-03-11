const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
  _id: { type: String },
  price: { type: Number },
  description: { type: String },
  images: [{ type: Buffer }],
  ArticleName: { type: String },
});

module.exports = mongoose.model("image", storeSchema);
