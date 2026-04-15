const multer = require('multer')
const path = require('path')

// set our multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        cb(null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        )
    }
})

// file filter function
const checkFileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (file.mimetype && allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed (jpeg, png, gif, webp)!'), false);
  }
};

// multer middleware
module.exports = multer({
    storage, 
    fileFilter: checkFileFilter,
    limits: {
        // 10mb maximum for file size
        fileSize: 10 * 1024 * 1024
    }
})