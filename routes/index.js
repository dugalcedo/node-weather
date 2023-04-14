const express = require('express')
const router = express.Router()

function fetchAndSend(uri, res) {
    fetch(uri).then( data => data.json())
    .then(json => {
        res.send(json)
    })
}

const home = router.get('/', (req, res) => {
    res.sendFile(filePath('views/index.html'))
})

const citySearch = router.post('/city-search', (req, res) => {
    let { city } = req.query
    let uri = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`
    fetchAndSend(uri, res)
})

const location = router.post('/location', (req, res) => {
    let { lat, long } = req.query
    let uri = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,windspeed_10m,windgusts_10m,apparent_temperature,precipitation_probability,precipitation`
    fetchAndSend(uri, res)
})

module.exports = {
    home,
    citySearch,
    location
}