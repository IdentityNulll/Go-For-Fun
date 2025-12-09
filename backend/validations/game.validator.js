const { body, validationResult } = require("express-validator");

exports.createGameValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("O'yin nomi kiritilishi shart")
    .isLength({ min: 3, max: 100 })
    .withMessage("O'yin nomi 3-100 belgi orasida bo'lishi kerak"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Tavsif 1000 belgidan oshmasligi kerak"),
  body("startDate")
    .notEmpty()
    .withMessage("Boshlanish sanasi kiritilishi shart")
    .isISO8601()
    .withMessage("Noto'g'ri sana formati"),
  body("endDate").optional().isISO8601().withMessage("Noto'g'ri sana formati"),
  body("location")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Manzil 200 belgidan oshmasligi kerak"),
  body("maxPlayers")
    .notEmpty()
    .withMessage("Maksimal ishtirokchilar soni kiritilishi shart")
    .isInt({ min: 2, max: 1000 })
    .withMessage("Ishtirokchilar soni 2-1000 orasida bo'lishi kerak"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.updateGameValidation = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("O'yin nomi 3-100 belgi orasida bo'lishi kerak"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Tavsif 1000 belgidan oshmasligi kerak"),
  body("startDate")
    .optional()
    .isISO8601()
    .withMessage("Noto'g'ri sana formati"),
  body("endDate").optional().isISO8601().withMessage("Noto'g'ri sana formati"),
  body("location")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Manzil 200 belgidan oshmasligi kerak"),
  body("maxPlayers")
    .optional()
    .isInt({ min: 2, max: 1000 })
    .withMessage("Ishtirokchilar soni 2-1000 orasida bo'lishi kerak"),
  body("status")
    .optional()
    .isIn(["upcoming", "ongoing", "completed", "cancelled"])
    .withMessage("Noto'g'ri status"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
