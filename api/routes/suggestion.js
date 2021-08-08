const r = require("express").Router();
const Suggestion = require("../models/Suggestions");
const { SuggestionSchema } = require("../helpers/validators");
const { SendEmail } = require("../helpers/mailers");

/**
 * Route used to save comment in database
 */
r.post("/", async (req, res) => {
  try {
    // Validate data
    await SuggestionSchema.validateAsync(req.body, {
      allowUnknown: true,
      abortEarly: true
    });
    // Create record
    let suggestion = await Suggestion.create(req.body);
    //Send email
    let obj = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      suggestionType: req.body.suggestionType,
      template: "suggestion.ejs"
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
