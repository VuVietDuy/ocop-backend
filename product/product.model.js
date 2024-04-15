const { timeStamp } = require("console");
const mongoose = require("mongoose");
const ObjectId = Schema.ObjectId;

const ProductSchema = mongoose.Schema({
  _id: { type: ObjectId, required: true },
  name: { type: String, required: true },
  supplyId: { type: ObjectId, ref: "Supply", required: true },
  thumbnail: { type: String, required: true },
  rate: { type: int, required: true },
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
