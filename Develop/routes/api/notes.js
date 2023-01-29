const notes = require('express').Router();
const fs = require('fs');
// const {
//     noteData
// } = require('../../db/db.json');

const { v4: uuidv4 } = require('uuid');

fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    let noteData = JSON.parse(data);

    notes.get('/', (req, res) => {
        res.json(noteData);
       
        console.log(noteData);
    })

    notes.post('/', (req, res) => {
        let newNote = req.body;
        noteData.push(newNote);
        updateNote();
        return console.log(`Added a new note: ${newNote.title} `)
    });

    const updateNote = () => {
        fs.writeFile('db/db.json', JSON.stringify(noteData,'\t'), err =>{
            if (err) throw err;
            return true
        })
    };
})

// notes.get('/', (req, res,) => {
//     console.log(`${req.method} request for notes`);

//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

//     // readFromFile('../db/db.json').then((data) => {
//     //     console.log(data);
//     //     res.json(JSON.parse(data));
//     // })
// }
// );



// notes.post('/', (req, res) => {

//     const { title, text } = req.body;
//     if (title && text) {
//         const newNote = {
//             title,
//             text,
//             note_id: uuidv4(),
//         }
//         readAndAppend(newNote, './db/db.json');
    
//     const response = {
//         status: 'success',
//         body: newNote,
//       };
  
//       res.json(response);
//     } else {
//       res.json('Error');
//     }
// });

module.exports = notes;