const save = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


save.post('/', (req, res) => {

    const {title, text} = req.body;
  
      const newNote = {
          title,
          text,
          id: uuidv4()
      };
  
      readAndAppend(newNote, './db/db.json');

       res.json(newNote);

})


module.exports = save;