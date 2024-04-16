const express = require("express");
const router = express.Router();
const supplyController = require("./supply.controller")

router.get("/", supplyController.getAllSupply)
router.post("/", supplyController.createNewSupply)

module.exports = router;