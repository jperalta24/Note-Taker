const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
const fs = require('fs');

const uniqid = require('uniqid');



notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});


notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uniqid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('New note added successfully');
    } else {
        res.errored('error creating new note');
    }


});
















module.exports = notes;