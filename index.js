const express = require('express')
const home = require('./routes/home')
const cors = require('cors')
const uploadImage = require('./middleware/uploadImage')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/home', home)
app.post('/img', uploadImage.single('foto'), (req, res) =>{
  res.send('Foto armazenada com sucesso')
})
app.get('/img', (req, res) => {
  res.sendFile(__dirname + '/img/' + 'teste.png')
})

const port = process.env.PORT || 9001
app.listen(port)