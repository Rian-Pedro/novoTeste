const multer = require('multer')

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './img')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  }),
  fileFilter: (req, file, cb) => {
    const extencaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype)

    if(extencaoImg) {
      return cb(null, true)
    }

    return cb(null, false)

  }
}))