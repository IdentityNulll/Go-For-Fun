const rateLimit = require("express-rate-limit");

exports.authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: "Juda ko'p urinish. 15 daqiqadan keyin qayta urinib ko'ring.",
  standardHeaders: true,
  legacyHeaders: false,
});

exports.generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests
  message: "Juda ko'p so'rov. 15 daqiqadan keyin qayta urinib ko'ring.",
  standardHeaders: true,
  legacyHeaders: false,
});
