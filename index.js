const express = require('express')
const home = require('./routes/home')
const routes = require('./routes/uploadImg')

const app = express()
app.use(express.json())

app.use('/home', home)
app.use(routes)

const port = process.env.PORT || 9001
app.listen(port)