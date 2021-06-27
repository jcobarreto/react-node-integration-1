//importing modules
const express = require("express");
const cors = require("cors");

// importing JSON data from data.js
const data = require("./data");

// initializing app
const app = express();

// initializing cors middleware for all routes
app.use(cors());

// creating route to make request to server for API
app.get("/api", (req, res) => {
  res.json(data);
});

// app is listening on port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
