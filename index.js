const path = require('path')
global.rootFolder = path.resolve(__dirname)
global.filePath = (x) => path.join(rootFolder, x)
const express = require('express')
require('dotenv').config()
const app = express()
const router = require('./routes/index.js')
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }))


app.get('/', router.home)
app.post('/city-search', router.citySearch)
app.post('/location', router.location)

app.listen(PORT, ()=>{console.log(`Now listening on port ${PORT}.`);})