const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
const fs = require('fs');
// const db = require('../../db/db.json');
const uniqid = require('uniqid');

// const db = require('../db/db.json');


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











// const {
//     noteData
// } = require('../../db/db.json');

// let noteData;

// notes.get('/', (req, res) => {
//     res.; 
// })

// fs.readFile('db/db.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     noteData = JSON.parse(data);

// notes.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../db/db.json"));
//     fs.readFile('db/db.json', 'utf8', (err, data) => {
//         if (err) throw err;
//         noteData = JSON.parse(data);
//         res.send(noteData);
//     }
//     )
// })

// notes.post('/', (req, res) => {
//     noteData = fs.readFileSync('db/db.json')
//     noteData = JSON.parse(noteData)
//     res.json(noteData);

//     let newNote = {
//         title: req.body.title,
//         text: req.body.text,
//         id: uniqid()
//     };

//     noteData.push(newNote);
//     fs.writeFileSync('db/db.json', JSON.stringify(noteData));
//     res.json(noteData);

// });




module.exports = notes;