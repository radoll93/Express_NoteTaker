const get = require('express').Router();
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

get.get('/', (req, res) => {

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

})


module.exports = get;
