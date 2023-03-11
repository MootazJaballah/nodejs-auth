const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    _id: { type: String, default: mongoose.Types.ObjectId },
    price: { type: Number },
    description: { type: String },
    images: [{ type: Buffer }],
    ArticleName: { type: String },
  },
  { collection: "images" }
);

module.exports = mongoose.model("image", storeSchema);
