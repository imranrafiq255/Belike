const multer = require("multer");

const multipleUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype.startsWith("image/") ||
      file.mimetype.startsWith("video/")
    ) {
      callback(null, true);
    } else {
      callback(
        new Error("Invalid file type. Only images and videos are allowed.")
      );
    }
  },
}).array("media", 2);
module.exports = multipleUpload;