const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid'); // to attach unique id to notes

// GET Route for retrieving all notes
notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting new notes 
notes.post('/', (req, res) => {
    // console.log(req.body); (used for testing)
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(), // attaching unique id, here
        };

        readAndAppend(newNote, './db/db.json'); // adds new note to db
        res.json(); // sends down db to update notes on left side
    } else {
        res.error('Error in adding note');
    }
    
});

// DELETE Route for deleting notes
notes.delete('/', (req, res) => {

});

module.exports = notes;
