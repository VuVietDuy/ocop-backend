const express = require("express");
const router = express.Router();
const productController = require("./product.controller");
const { upload } = require("./product.middleware");

router.get("/", productController.getAllProduct);
router.post("/", upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'detailThumbnail', maxCount: 1 },
    { name: 'sliderImg', maxCount: 1 },
    { name: 'sliderThumbnail', maxCount: 1 },
    { name: 'qrCode', maxCount: 1 }
]), productController.createNewProduct);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProductById);


module.exports = router;