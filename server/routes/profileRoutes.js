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

router.post("/", (req, res) => {
  // const { firstName, lastName, phone, email, stylist, dateVisited } = req.body;
  knex("profiles")
    .insert(req.body)
    .then((newProfile) => {
      console.log(req.body);
      res.status(201).json(newProfile);
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error creating profile",
      });
    });
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
});

module.exports = router;
