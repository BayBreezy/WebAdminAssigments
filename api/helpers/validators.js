const Joi = require("joi");

const CommentSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  message: Joi.string().required()
});
const SuggestionSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  message: Joi.string().required(),
  suggestionType: Joi.string().required()
});
const FeedbackSchema = Joi.object({
  a1: Joi.string().required(),
  a2: Joi.string().required(),
  a3: Joi.string().required(),
  a4: Joi.string().required(),
  u1: Joi.number().required(),
  u2: Joi.string().required(),
  u3: Joi.string().required(),
  u4: Joi.string().required(),
  u5: Joi.string().required(),
  p1: Joi.string().required(),
  p2: Joi.string().required()
});
module.exports = {
  CommentSchema,
  FeedbackSchema,
  SuggestionSchema
};
