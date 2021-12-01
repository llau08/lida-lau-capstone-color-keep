const express = require("express");
const router = express.Router();
const knex = require("../database/connection");

router.post("/", (req, res) => {
  knex("users")
    .insert(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    });
});

module.exports = router;
