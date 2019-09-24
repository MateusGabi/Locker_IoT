const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/data', function(req, resp) {
    resp.json({ sucesso: true })
})

module.exports = app
