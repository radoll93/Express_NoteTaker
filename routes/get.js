const get = require('express').Router();
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

get.get('/', (req, res) => {

    
    fs.readFile('./db/db.json', (err, data) => res.json(JSON.parse(data)))

})


module.exports = get;
