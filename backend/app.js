// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// require("dotenv").config();

// const db = require("./models");
// const { errorHandler } = require("./middleware/error.middleware");
// const { generalLimiter } = require("./middleware/rateLimiter");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));
// app.use(generalLimiter);

// // Routes
// app.use("/api/auth", require("./routes/auth.routes"));
// app.use("/api/admin", require("./routes/admin.routes"));
// app.use("/api/organizer", require("./routes/organizer.routes"));
// app.use("/api/player", require("./routes/player.routes"));
// app.use("/api/notifications", require("./routes/notification.routes"));

// // Health check
// app.get("/health", (req, res) => {
//   res.json({ status: "OK", message: "Server ishlayapti" });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: "Yo'l topilmadi" });
// });

// // Error handler
// app.use(errorHandler);

// // Database connection and server start
// db.sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Database ga ulanildi");
//     app.listen(PORT, () => {
//       console.log(`Server ${PORT} portda ishga tushdi`);
//     });
//   })
//   .catch((err) => {
//     console.error("Database ga ulanishda xatolik:", err);
//   });

// module.exports = app;























const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const db = require("./models");
const { errorHandler } = require("./middleware/error.middleware");
const { generalLimiter } = require("./middleware/rateLimiter");
const { specs, swaggerUi, swaggerOptions } = require("./swagger/swagger");
const corsMiddleware = require("./middleware/cors.middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS - ENG BIRINCHI!
app.use(corsMiddleware);

// Helmet - lekin Swagger uchun CSP ni o'chirish kerak
app.use(
  helmet({
    contentSecurityPolicy: false, // Swagger uchun
    crossOriginEmbedderPolicy: false,
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan("dev"));

// Rate limiting (Auth endpointlardan tashqari)
app.use("/api", (req, res, next) => {
  if (req.path.startsWith("/auth")) {
    return next();
  }
  return generalLimiter(req, res, next);
});

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(specs, swaggerOptions));


app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/organizer", require("./routes/organizer.routes"));
app.use("/api/player", require("./routes/player.routes"));
app.use("/api/notifications", require("./routes/notification.routes"));


app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server ishlayapti" });
});


app.get("/api/test-token", (req, res) => {
  const authHeader = req.headers["authorization"];
  res.json({
    message: "Token test endpoint",
    authHeader: authHeader || "Token yo'q",
    headers: req.headers,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Yol topilmadi" });
});

// Error handler
app.use(errorHandler);

// Database va server
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database ga ulanildi");
    app.listen(PORT, () => {
      console.log(`✅ Server ${PORT} portda ishga tushdi`);
      console.log(`📚 Swagger: http://localhost:${PORT}/api-docs`);
      console.log(`🧪 Token test: http://localhost:${PORT}/api/test-token`);
    });
  })
  .catch((err) => {
    console.error("❌ Database xatosi:", err);
  });

module.exports = app;