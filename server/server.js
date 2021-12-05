if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const path = require("path");
// const multer = require("multer");
const bodyParser = require("body-parser");

const profileRoutes = require("./routes/profileRoutes");
const userRoutes = require("./routes/userRoutes");

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Routes

app.use("/profile", profileRoutes);
// app.use("/profile/:id", profileRoutes);
app.use("/", userRoutes);

app.listen(PORT, function () {
  console.log(`Express server is up and running on Port ${PORT}!`);
});
