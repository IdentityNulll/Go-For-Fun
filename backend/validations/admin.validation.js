const Joi = require("joi");

const createAdminSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  userName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(8).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{9,15}$/)
    .required(),
});

const updateAdminSchema = Joi.object({
  firstName: Joi.string().min(2).max(50),
  lastName: Joi.string().min(2).max(50),
  userName: Joi.string().alphanum().min(3).max(30),
  password: Joi.string().min(8),
  phone: Joi.string().pattern(/^[0-9]{9,15}$/),
}).min(1);

module.exports = {
  createAdminSchema,
  updateAdminSchema,
};
