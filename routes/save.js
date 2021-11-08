const save = require('express').Router();
const noteData = require('../db/db.json');
const fs = require('fs');


save.post('/', (req, res) => {

    const {title, text} = req.body;

    const newnote = {
        title,
        text
    };

    fs.writeFile(noteData, )

    res.json(newnote);
})


module.exports = save;