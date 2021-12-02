const express = require("express");
const router = express.Router();
const knex = require("../database/connection");

//Sign Up
router.post("/", (req, res) => {
  knex("users")
    .insert(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    });
});

//Login
// router.post("/login", (req, res) => {
//   knex("users")
//     .insert(req.body)
//     .where("username = ? && password =?")
//     .then((newLogin) => {
//       res.status(201).json(newLogin);
//     })
//     .catch((err) => {
//       res.status(500).json(err.message);
//     });
// });

module.exports = router;
