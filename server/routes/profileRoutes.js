const express = require("express");
const router = express.Router();
const fs = require("fs");

let profileData = [];

const getProfiles = () => {
  fs.readFile("./data/profiles.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    profileData = JSON.parse(data);
  });
};
getProfiles();

router.post("/", (req, res) => {
  const { firstName, lastName, phone, email, stylist, date } = req.body;
  const newProfile = {
    firstName,
    lastName,
    phone,
    email,
    stylist,
    date,
  };
  profileData.push(newProfile);
  fs.writeFile("./data/profiles.json", JSON.stringify(profileData), (err) => {
    if (err) {
      res.status(500).send("unable to save");
    }
    res.json(profileData);
  });
});

module.exports = router;
