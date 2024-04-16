const Product = require("./product.model");

async function createNewProduct(req, res) {
    const newProduct = new Product(req.body);
    const images = req.files;
    newProduct[images.thumbnail[0].fieldname] = "https://ocop-backend.vercel.app/" + images.thumbnail[0].filename;
    newProduct[images.detailThumbnail[0].fieldname] = "https://ocop-backend.vercel.app/" + images.detailThumbnail[0].filename;
    newProduct[images.sliderImg[0].fieldname] = "https://ocop-backend.vercel.app/" + images.sliderImg[0].filename;
    newProduct[images.qrCode[0].fieldname] = "https://ocop-backend.vercel.app/" + images.qrCode[0].filename;
    newProduct.save()
        .then((product) => {
            return res.status(200).json({
                message: "Thêm nhà sản phẩm thành công",
                data: product,
            })
        })
        .catch((err) => {
            return res.status(500).json({ message: err, data: null })
        })
}

async function getAllProduct(req, res) {
    Product.find()
        .then((products) => {
            return res.status(200).json({
                message: "Danh sách sản phẩm",
                data: products,
            })
        })
        .catch((err) => {
            return res.status(500).json({ message: err, data: null })
        })
}

async function getProductById(req, res) {
    const id = req.params.id
    Product.findById(id)
        .then((product) => {
            return res.status(200).json({
                message: "Chi tiết sản phẩm",
                data: product,
            })
        })
        .catch((err) => {
            return res.status(500).json({ message: err, data: null })
        })
}

module.exports = {
    createNewProduct,
    getAllProduct,
    getProductById
}