const express = require("express");
const router = express.Router();
const fs = require("fs");
const knex = require("../database/connection");

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
//GET ALL PROFILES
router.get("/", (req, res) => {
  knex("profiles")
    .then((data) => {
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
    });
});

router.patch("/:id", (req, res) => {
  knex("profiles")
    .where("id", req.params.id)
    .update(req.body)
    .then((data) => {
      res.json(data);
    });
});

router.delete("/:id", (req, res) => {
  knex("profiles")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
