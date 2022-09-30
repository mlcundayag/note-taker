
const express = require('express');
const path = require('path');
const database = require('./db/db.json')

const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
)

// GET request for reviews
app.get('/api/notes', (req, res) => {
    // Send a message to the client
    res.json(database);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
  });

app.listen(PORT, () => 
    console.log(`App listening at localhost:${PORT} 🚀`)
)






//('/notes') - notes html
//('/') - index.html

//('api/notes')
//post! ('api/notes')


// notes --> notes HTML file
// / --> index.html (landing page)

// GET & POST    /api/notes --> db.jspon