const express = require("express");
const router = express.Router();
const knex = require("../database/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Sign Up
router.post("/sign-up", (req, res) => {
  let username = req.body.userName;
  let password = req.body.password;

  bcrypt.hash(password, 8).then((hashedPassword) => {
    console.log(hashedPassword);
    knex("users")
      .insert({ userName: username, password: hashedPassword })
      .then((user) => {
        let token = jwt.sign(
          { user: user.userName, password: user.password },
          process.env.JWT_SECRET,
          { expiresIn: "3h" }
        );
        res.status(201).json({ token: token });
      });
  });
});

router.post("/login", (req, res) => {
  knex("users")
    .where({ userName: req.body.userName })
    .then((user) => {
      let result = bcrypt.compareSync(req.body.password, user[0].password);

      if (!result) {
        return res.status(400).json({ err: "username & password incorrect" });
      }
      let token = jwt.sign(
        { user: user[0].userName, password: user[0].password },
        process.env.JWT_SECRET,
        { expiresIn: "3h" }
      );
      res.send({ token: token, user: user });
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
