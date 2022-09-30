const express = require('express');
const path = require('path');
const htmlRouter = express()

htmlRouter.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

htmlRouter.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
)

htmlRouter.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../pblic/index.html'))
)

module.exports = htmlRouter