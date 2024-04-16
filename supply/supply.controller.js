const Supply = require("./supply.model");

async function createNewSupply(req, res) {
    const newSupply = new Supply(req.body);
    newSupply.save()
        .then((supply) => {
            return res.status(200).json({
                message: "Thêm nhà cung cấp thành công",
                data: supply,
            })
        })
        .catch((err) => {
            return res.status(500).json({ message: err, data: null })
        })
}

async function getAllSupply(req, res) {
    Supply.find()
        .then((supplies) => {
            return res.status(200).json({
                message: "Nhà cung cấp",
                data: supplies,
            })
        })
        .catch((err) => {
            return res.status(500).json({ message: err, data: null })
        })
}

module.exports = {
    createNewSupply,
    getAllSupply
}