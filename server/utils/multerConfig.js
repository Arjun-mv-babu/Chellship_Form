const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|pdf|docx|txt/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images, documents, and text files are allowed.'));
  }
};


const limits = {
  fileSize: 2 * 1024 * 1024,
};


const upload = multer({
  storage,
  fileFilter,
  limits,
});


module.exports = {
  uploadSingle: (fieldName) => upload.single(fieldName),

  uploadMultiple: (fieldName, maxCount) => upload.array(fieldName, maxCount),

  uploadMixed: (fields) => upload.fields(fields),

  upload,
};
