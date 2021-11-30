const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const path = require("path");
// const jwt = require("jsonwebtoken");
const profileRoutes = require("./routes/profileRoutes");

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Routes

// app.use("/add-client", profileRoutes);
app.use("/profiles", profileRoutes);

app.listen(PORT, function () {
  console.log(`Express server is up and running on Port ${PORT}!`);
});
