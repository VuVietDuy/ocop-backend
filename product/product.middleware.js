const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        const str = req.body.name
        const s = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const arr = s.split(" ");
        var filename = arr[0];
        for (var i = 1; i < arr.length; i++) {
            filename += "-" + arr[i];
        }
        cb(null, filename + '-' + file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = {
    upload
}