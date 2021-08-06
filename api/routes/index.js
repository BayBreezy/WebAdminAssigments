const r = require("express").Router();
r.use("/comments", require("./comments"));
module.exports = r;
