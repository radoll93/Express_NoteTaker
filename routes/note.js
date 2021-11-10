const note = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

let id;

note.get(`/${id}`, (req, res) => {

    readFromFile('./db/db.json').then((data) => {
        id = JSON.parse(data).note_id;
        res.json(JSON.parse(data))
    });

})


module.exports = note;
