const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../../helpers/fsUtils');
const fs = require('fs');
// const db = require('../../db/db.json');
const uniqid = require('uniqid');




notes.get('/', (req, res) => {
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    fs.readFile('./db/db.json', (err,data) => {
        if (err) throw err;
        let db = JSON.parse(data);
        res.json(db);
    })
});


notes.post('/', (req, res) => {

    // const newNote = req.body
    // const {title, text} = req.body
    // newNote.id = uniqid();

    //  const { title, text } = req.body;

    // if (req.body) {
    //     const newNote = {
    //         title,
    //         text,
    //         note_id: uniqid(),
    //     };


    // let db = JSON.parse(fs.readFile('./db/db.json'));

    // db.push(newNote);

    // fs.writeFile('./db/db.json', JSON.stringify(db));
    // res.json(db);
    // } else {
    //     res.errored('error creating note')
    // }
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

notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) =>{
        const result = json.filter((note) => {note.note_id !== noteId});
        writeToFile('./db/db.json', result);

        res.json('Note has been deleted')
    })
});


module.exports = notes;