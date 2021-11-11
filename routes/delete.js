const deletedb = require('express').Router();
const fs = require('fs');



deletedb.delete('/:id', (req, res) => {

    const { id } = req.params;

    
    fs.readFile('./db/db.json', (err, data) => {
    const parsingData = JSON.parse(data);

    parsingData.forEach(noteobject => {
        if(id === noteobject.id) {
            const idIndex = parsingData.indexOf(noteobject);

            parsingData.splice(idIndex, 1);



            fs.writeFile('./db/db.json', JSON.stringify(parsingData, null, 4), (err) => 
                      err ? console.error(err) : console.log('delete is done') )
        
                      res.json(parsingData);

        }
    })
})
})


module.exports = deletedb;