const mongoose = require("mongoose");

const SupplySchema = mongoose.Schema({
    phone: { type: String, require: true },
    supplyLocation: { type: String, require: true },
    supplyAssociation: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Supply", SupplySchema);
