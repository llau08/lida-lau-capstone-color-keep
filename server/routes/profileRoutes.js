const express = require("express");
const router = express.Router();
const fs = require("fs");
const knex = require("../database/connection");

// let profileData = [];

// const getProfiles = () => {
//   fs.readFile("./data/profiles.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     profileData = JSON.parse(data);
//   });
// };
// getProfiles();
//POST A NEW PROFILE
router.post("/", (req, res) => {
  // const { firstName, lastName, phone, email, stylist, dateVisited } = req.body;
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

router.put("/:id", (req, res) => {
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
// knex("profiles").then((results) => {
//   res.json(results);
// });
// });
// const newProfile = {
//   firstName,
//   lastName,
//   phone,
//   email,
//   stylist,
//   dateVisited,
// };
// profileData.push(newProfile);
// fs.writeFile("./data/profiles.json", JSON.stringify(profileData), (err) => {
//   if (err) {
//     res.status(500).send("unable to save");
//   }
//   res.json(profileData);
// });
// });

module.exports = router;
