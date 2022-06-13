var Chirp = require("../models/chirp.js");

module.exports = function(app) {

  // get all chirps
  app.get("/api/all", function(req, res) {

    Chirp.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // add a new chirp
  app.post("/api/new", function(req, res) {

    Chirp.create({
      author: req.body.author,
      created_at: req.body.created_at
    })
    .then(function(results) {
      res.end();
    });

  });

};