const r = require("express").Router();
r.use("/comments", require("./comments"));
r.use("/feedback", require("./feedback"));
r.use("/suggestions", require("./suggestion"));
module.exports = r;
