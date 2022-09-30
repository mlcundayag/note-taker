const express = require('express')

app.get('/api/notes', (req, res) => {
    res.json(database);
    console.info(`${req.method} request received to get notes`);
  });

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    const { title, text } = req.body;
    if (title && text) {
        const newNotes = {
            title, 
            text,

        };
        const notesString = JSON.stringify(newNotes)

        fs.writeFile()
    }
})  