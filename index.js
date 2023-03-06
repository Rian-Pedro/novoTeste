const express = require('express')
const home = require('./routes/home')
const uploadImage = require('./middleware/uploadImage')

const app = express()
app.use(express.json())

app.use('/home', home)
app.post('/img', uploadImage.single('foto'), (req, res) =>{
  res.send('Foto armazenada com sucesso')
})
app.get('/img', (req, res) => {
  res.send('teste')
})

const port = process.env.PORT || 9001
app.listen(port)