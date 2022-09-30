const apiNotes = require('express').Router()
const uuid = require('../helper/uuid')
const fs = require('fs');
const path = require('path');


apiNotes.get('/notes', (req, res) => {
    console.info(`${req.method} request received to get notes`);
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

apiNotes.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    let db = fs.readFileSync('db/db.json')
    db = JSON.parse(db)

    if (req.body) {
        const newNotes = {
            ...req.body,
            id: uuid(),
        };
        db.push(newNotes);
        fs.writeFileSync('db/db.json', JSON.stringify(db))
        res.json('Note added successfully 🚀');
    } else {
        res.error('Error in adding note')
    }
});

apiNotes.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`)
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
  })

module.exports = apiNotes