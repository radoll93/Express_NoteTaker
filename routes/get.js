const get = require('express').Router();
const noteData = require('../db/db.json');


get.get('/', (req, res) => {
    res.json(noteData);
})


module.exports = get;