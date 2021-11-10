const deletedb = require('express').Router();
const fs = require('fs');

const idArray = []; 


fs.readFile('./db/db.json', (err, data) => {
    if(err) {
        console.error(err)
    } else {
        const parsingData = JSON.parse(data);

            parsingData.forEach(noteobject => {
            idArray.push(noteobject.id);
        })

    
        idArray.forEach(data => {
            let id =data;



deletedb.delete(`/${id}`, (req, res) => {

    const idIndex = idArray.indexOf(id);

    parsingData.splice(idIndex, 1);

    fs.writeFile('./db/db.json', JSON.stringify(parsingData, null, 4), (err) => 
              err ? console.error(err) : console.log('delete is done') )

    res.json(parsingData);

})

})


}})


module.exports = deletedb;