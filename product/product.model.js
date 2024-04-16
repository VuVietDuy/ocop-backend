const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  supplyId: { type: ObjectId, ref: "Supply", required: true },
  thumbnail: { type: String, required: true },
  sliderImg: { type: String, required: true },
  detailThumbnail: { type: String, required: true },
  rate: { type: Number, required: true },
  client: { type: String, required: true },
  ingredient: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  materialArea: { type: String, required: true },
  qrCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);
