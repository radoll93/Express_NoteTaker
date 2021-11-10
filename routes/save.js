const save = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


save.post('/', (req, res) => {

    const {title, text} = req.body;
  
      const newNote = {
          title,
          text,
          id: uuidv4()
      };
  
      fs.readFile('./db/db.json', (err, data) => {
          if(err) {
              console.error(err)
          } else {
              const parsingData = JSON.parse(data);
              parsingData.push(newNote);

              fs.writeFile('./db/db.json', JSON.stringify(parsingData, null, 4), (err) => 
              err ? console.error(err) : console.log('save is done') )
          }
      })

       res.json(newNote);

})


module.exports = save;