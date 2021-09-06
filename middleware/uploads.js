var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    
  console.log("file", file);
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    callback(null, true);
  } else {
    callback(
      {
        message:
          "Unsuported file format Only jpeg , jpg and png file supported",
      },
      false
    );
  }
};

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});


module.exports =upload