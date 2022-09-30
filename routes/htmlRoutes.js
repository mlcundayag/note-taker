//connect my dependencies and path
const htmlRouter = require('express').Router()
const path = require('path');


//connect index.html
htmlRouter.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

//connect notes html
htmlRouter.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
)


//a wildcard catch all that will return user to the landing page
htmlRouter.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

module.exports = htmlRouter