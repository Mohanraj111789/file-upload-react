const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const filename = `${Date.now()}${extension}`;
        cb(null, filename);
    },
});

module.exports = multer({
    storage: storage
});