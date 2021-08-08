const r = require("express").Router();
const Feedback = require("../models/Feedback");
const { FeedbackSchema } = require("../helpers/validators");
const { SendEmail } = require("../helpers/mailers");

/**
 * Route used to save feedback in database
 */
r.post("/", async (req, res) => {
  try {
    // Validate data
    await FeedbackSchema.validateAsync(req.body, {
      allowUnknown: true,
      abortEarly: true
    });
    // Create record
    let feedback = await Feedback.create(req.body);
    //Send email
    let obj = {
      ...req.body,
      template: "feedback.ejs"
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
