const r = require("express").Router();
const Comment = require("../models/Comment");
const { CommentSchema } = require("../helpers/validators");
const { SendEmail } = require("../helpers/mailers");

/**
 * Route used to save comment in database
 */
r.post("/", async (req, res) => {
  try {
    // Validate data
    await CommentSchema.validateAsync(req.body, {
      allowUnknown: true,
      abortEarly: true
    });
    // Create record
    let comment = await Comment.create(req.body);
    //Send email
    let obj = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      template: "newcomment.ejs"
    };
    await SendEmail(obj);
    // Retuirn res to client
    return res.status(200).json({ message: "Thank you" });
  } catch (error) {
    if (error.isJoi) return res.status(400).json({ error: "Incomplete data." });
    res.json(error);
  }
});
module.exports = r;
