const router = require('express').Router()
const cors = require('cors')
const uploadImg = require('../middleware/uploadImage')

router.post('/img', uploadImg.single('foto'), (req, res) => {
  cors()
  res.send('Arquivo salvo com sucesso')
});

router.get('/img', (req, res) => {
  cors()
  res.sendFile(__dirname + '/img/' + 'teste.png')
})

module.exports = router