
const notes = require('express').Router();
const noteData = require('../../db/db.json');
const {v4: uuidv4} = require('uuid');

notes.get('/', (req, res,) => {
    console.log(`${req.method} request for notes`);

    readFromFile('../db/db.json').then((data) => {
        console.log(data);
         res.json(JSON.parse(data)); 
    })
}
);

notes.post('/', (req, res) => {
   
    const {title,  text} = req.body;
    if (req.body){
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        }
    }
});

module.exports = notes;