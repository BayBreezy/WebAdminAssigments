const express = require("express");
const cors = require("cors");
const db = require("./database");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.authenticate()
  .then(async () => {
    require("./models");
    await db.sync({ alter: true });
  })
  .catch(e => console.log(e));
app.use("/", require("./routes"));

module.exports = app;
