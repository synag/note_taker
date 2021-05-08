var fs = require("fs");

const db = require("../db/db.json");

module.exports = (app) => {
  //fill out api routes
  app.get("/api/notes", (req, res) => res.json(db));

  console.log(db);

  app.post("/api/notes", (req, res) => {
    const obj = req.body;
     
    db.push(obj)

    res.json(obj);
  });
};

// const getNotes = () =>
// fetch('/api/notes', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const saveNote = (note) =>
// fetch('/api/notes', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(note),
// });

// const deleteNote = (id) =>
// fetch(`/api/notes/${id}`, {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
