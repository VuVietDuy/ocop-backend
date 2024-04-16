const express = require("express");
const router = express.Router();
const productController = require("./product.controller");
const { upload } = require("./product.middleware");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProductById);
router.post("/", upload.fields([
    { name: 'sliderImg', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
    { name: 'detailThumbnail', maxCount: 1 },
    { name: 'qrCode', maxCount: 1 }
]), productController.createNewProduct);


module.exports = router;