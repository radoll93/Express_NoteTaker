const save = require('express').Router();
const fs = require('fs');

save.get('/', (req, res) => )


save.post('/', (req, res) => {

    const noteArray = [];


    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.error(err)
        } else {
        console.log('reading is done')
        const parsingData = JSON.parse(data);
        parsingData.forEach(note => {
        noteArray.push(note);
        });

        
    fs.writeFile('./db/db.json', JSON.stringify(noteArray, null, 4), (err) => {
        if(err) {
            console.error(err)
        } else{
            console.log('writing is done');
            console.log(noteArray)
        }       
    })}
    });


    const {title, text} = req.body;

    const newnote = {
        title,
        text
    };

    noteArray.push(newnote);



    res.json(newnote);
})


module.exports = save;