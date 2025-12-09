const cors = require("cors");

const corsOptions = {
  origin: "*", // Hammaga ruxsat (development uchun)
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "authorization"],
  exposedHeaders: ["Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);
