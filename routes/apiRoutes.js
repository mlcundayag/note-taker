//connect/import dependencies
const apiNotes = require('express').Router()
const uuid = require('../helper/uuid')
const fs = require('fs');
const path = require('path');

//connect up api/notes and shows my db folder
apiNotes.get('/notes', (req, res) => {
    console.info(`${req.method} request received to get notes`);
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

//set up my POST express
apiNotes.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    let db = fs.readFileSync('db/db.json')
    db = JSON.parse(db)

    //use spread separator (title and notes) and id
    if (req.body) {
        const newNotes = {
            ...req.body,
            id: uuid(),
        };
        //push new notes to the my db json
        db.push(newNotes);
        fs.writeFileSync('db/db.json', JSON.stringify(db))
        res.json('Note added successfully 🚀');
    } else {
        res.error('Error in adding note')
    }
});

//set up my DELETE express
apiNotes.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`)
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
  })

module.exports = apiNotes