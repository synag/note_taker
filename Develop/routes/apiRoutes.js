const fs = require("fs");
var shortid = require('shortid');



const db = require("../db/db.json");

module.exports = (app) => {
  //fill out api routes
  app.get("/api/notes", (req, res) => res.json(db));

  console.log(db);



  app.post("/api/notes", (req, res) => {
    // const obj = req.body;
    const obj = req.body
    obj.id = shortid.generate()
    db.push(obj);
    console.log(db);
    console.log(shortid.generate());

    res.json(obj);
  });

  app.delete('/api/notes/:id', (req,res)=>{
    console.log("req params", req.params.id)
     indexPos = db.indexOf(req.params.id)
     db.splice(indexPos,1)
      res.send("Deleted")
    })
  
};



