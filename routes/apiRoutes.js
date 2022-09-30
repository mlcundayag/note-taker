const apiNotes = require('express').Router()
const { readFromFile, readAndAppend } = require('../helper/fsUtils');


apiNotes.get('/notes', (req, res) => {
    console.info(`${req.method} request received to get notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
  });

apiNotes.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    const { title, text } = req.body;

    if (req.body) {
        const newNotes = {
            title, 
            text,
        };
        readAndAppend(newNotes, './db/db.json');
        res.json('Note added successfully 🚀');
    } else {
        res.error('Error in adding note')
    }
});

module.exports = apiNotes