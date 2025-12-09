const Joi = require("joi");

const createPlayerSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  userName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{9,15}$/)
    .required(),
});

const updatePlayerSchema = Joi.object({
  firstName: Joi.string().min(2).max(50),
  lastName: Joi.string().min(2).max(50),
  userName: Joi.string().alphanum().min(3).max(30),
  password: Joi.string().min(6),
  phone: Joi.string().pattern(/^[0-9]{9,15}$/),
}).min(1);

const loginSchema = Joi.object({
  userName: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  createPlayerSchema,
  updatePlayerSchema,
  loginSchema,
};
