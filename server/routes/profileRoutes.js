const express = require("express");
const router = express.Router();
const knex = require("../database/connection");
const auth = require("../middleware/auth");

router.post("/", (req, res) => {
  knex("profiles")
    .insert(req.body)
    .then((newProfile) => {
      console.log(req.body);
      res.status(201).json(newProfile);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});
//GET ALL PROFILES // add "auth" for protected routes

router.get("/", auth, (req, res) => {
  knex("profiles")
    .then((data) => {
      console.log(auth);
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/:id", (req, res) => {
  knex("profiles")
    .where("id", req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.patch("/:id", (req, res) => {
  knex("profiles")
    .where("id", req.params.id)
    .update(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.delete("/:id", (req, res) => {
  knex("profiles")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
