const deletedb = require('express').Router();
const fs = require('fs');

let id;

deletedb.delete(`/${id}`, (req, res) => {
    
    
    readFromFile('./db/db.json').then((data) => {
        noteId = JSON.parse(data).note_id;
        res.json(JSON.parse(data))
    });


    // const noteArray = [];


    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if(err) {
    //         console.error(err)
    //     } else {
    //     console.log('reading is done')
    //     const parsingData = JSON.parse(data);
    //     parsingData.forEach(note => {
    //     noteArray.push(note);
    //     });

        
    // fs.writeFile('./db/db.json', JSON.stringify(noteArray, null, 4), (err) => {
    //     if(err) {
    //         console.error(err)
    //     } else{
    //         console.log('writing is done');
    //         console.log(noteArray)
    //     }       
    // })}
    // });

    // noteId
    // const {title, text} = req.body;

    // const deletenote = {
    //     title,
    //     text
    // };

    // console.log(res.id);
    // console.log(req.headers)

    // // noteArray.(deletenote);



    // res.json(deletenote);
})

module.exports = deletedb;