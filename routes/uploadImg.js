const router = require('express').Router()
const uploadImg = require('../middleware/uploadImage')

router.post('/img', uploadImg.single('foto'), (req, res) => {
  res.send('Arquivo salvo com sucesso')
});

router.get('/img', (req, res) => {
  res.sendFile(__dirname + '/img/' + 'teste.png')
})

module.exports = router