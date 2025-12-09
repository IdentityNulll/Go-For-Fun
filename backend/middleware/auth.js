// const jwt = require("jsonwebtoken");
// const JWT_SECRET =
//   process.env.JWT_SECRET || "your-secret-key-change-in-production";

// exports.verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.status(403).json({ message: "Token berilmagan" });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Yaroqsiz token" });
//   }
// };

// exports.isAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ message: "Faqat admin uchun" });
//   }
//   next();
// };

// exports.isOrganizer = (req, res, next) => {
//   if (req.user.role !== "organizer") {
//     return res.status(403).json({ message: "Faqat organizer uchun" });
//   }
//   next();
// };

// exports.isPlayer = (req, res, next) => {
//   if (req.user.role !== "player") {
//     return res.status(403).json({ message: "Faqat player uchun" });
//   }
//   next();
// };

// exports.isOrganizerOrAdmin = (req, res, next) => {
//   if (req.user.role !== "organizer" && req.user.role !== "admin") {
//     return res
//       .status(403)
//       .json({ message: "Faqat organizer yoki admin uchun" });
//   }
//   next();
// };










const jwt = require("jsonwebtoken");
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

exports.verifyToken = (req, res, next) => {
  // 1. Authorization header dan token olish
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({
      message:
        'Token berilmagan. Iltimos login qiling va tokenni "Authorize" tugmasi orqali qo\'shing',
    });
  }

  // 2. Bearer tokenni ajratish
  let token;

  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7); // "Bearer " dan keyin
  } else {
    token = authHeader; // To'g'ridan-to'g'ri token
  }

  if (!token || token === "undefined" || token === "null") {
    return res.status(403).json({
      message: "Token noto'g'ri formatda. Format: Bearer <token>",
    });
  }

  try {
    // 3. Tokenni tekshirish
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token muddati tugagan. Iltimos qaytadan login qiling",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message:
          "Yaroqsiz token. Iltimos login qiling va to'g'ri tokenni kiriting",
      });
    }
    return res.status(401).json({
      message: "Token autentifikatsiya xatosi",
      error: error.message,
    });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Faqat admin uchun. Sizning rolingiz: " + req.user.role,
    });
  }
  next();
};

exports.isOrganizer = (req, res, next) => {
  if (req.user.role !== "organizer") {
    return res.status(403).json({
      message: "Faqat organizer uchun. Sizning rolingiz: " + req.user.role,
    });
  }
  next();
};

exports.isPlayer = (req, res, next) => {
  if (req.user.role !== "player") {
    return res.status(403).json({
      message: "Faqat player uchun. Sizning rolingiz: " + req.user.role,
    });
  }
  next();
};

exports.isOrganizerOrAdmin = (req, res, next) => {
  if (req.user.role !== "organizer" && req.user.role !== "admin") {
    return res.status(403).json({
      message:
        "Faqat organizer yoki admin uchun. Sizning rolingiz: " + req.user.role,
    });
  }
  next();
};