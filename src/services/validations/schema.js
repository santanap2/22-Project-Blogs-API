const joi = require('joi');

const emailSchema = joi.string().email().required();

const displayNameSchema = joi.string().min(8).required();

const passwordSchema = joi.string().min(6).required();

module.exports = {
  emailSchema,
  displayNameSchema,
  passwordSchema,
};
