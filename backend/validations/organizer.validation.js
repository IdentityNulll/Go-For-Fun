// exports.createOrganizerValidation = [
//   body("firstName")
//     .trim()
//     .notEmpty()
//     .withMessage("Ism kiritilishi shart")
//     .isLength({ min: 2, max: 50 })
//     .withMessage("Ism 2-50 belgi orasida bo'lishi kerak"),
//   body("lastName")
//     .trim()
//     .notEmpty()
//     .withMessage("Familiya kiritilishi shart")
//     .isLength({ min: 2, max: 50 })
//     .withMessage("Familiya 2-50 belgi orasida bo'lishi kerak"),
//   body("username")
//     .trim()
//     .notEmpty()
//     .withMessage("Foydalanuvchi nomi kiritilishi shart")
//     .isLength({ min: 3, max: 30 })
//     .withMessage("Foydalanuvchi nomi 3-30 belgi orasida bo'lishi kerak")
//     .matches(/^[a-zA-Z0-9_]+$/)
//     .withMessage(
//       "Foydalanuvchi nomi faqat harf, raqam va _ dan iborat bo'lishi kerak"
//     ),
//   body("password")
//     .notEmpty()
//     .withMessage("Parol kiritilishi shart")
//     .isLength({ min: 6 })
//     .withMessage("Parol kamida 6 ta belgidan iborat bo'lishi kerak"),
//   body("phone")
//     .notEmpty()
//     .withMessage("Telefon raqami kiritilishi shart")
//     .isNumeric()
//     .withMessage("Telefon raqami faqat raqamlardan iborat bo'lishi kerak")
//     .isLength({ min: 9, max: 15 })
//     .withMessage("Telefon raqami 9-15 ta raqamdan iborat bo'lishi kerak"),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   },
// ];


















const { body, validationResult } = require("express-validator");

exports.createOrganizerValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("Ism kiritilishi shart")
    .isLength({ min: 2, max: 50 })
    .withMessage("Ism 2-50 belgi orasida bo'lishi kerak"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Familiya kiritilishi shart")
    .isLength({ min: 2, max: 50 })
    .withMessage("Familiya 2-50 belgi orasida bo'lishi kerak"),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Foydalanuvchi nomi kiritilishi shart")
    .isLength({ min: 3, max: 30 })
    .withMessage("Foydalanuvchi nomi 3-30 belgi orasida bo'lishi kerak")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      "Foydalanuvchi nomi faqat harf, raqam va _ dan iborat bo'lishi kerak"
    ),

  body("password")
    .notEmpty()
    .withMessage("Parol kiritilishi shart")
    .isLength({ min: 6 })
    .withMessage("Parol kamida 6 ta belgidan iborat bo'lishi kerak"),

  body("phone")
    .notEmpty()
    .withMessage("Telefon raqami kiritilishi shart")
    .isNumeric()
    .withMessage("Telefon raqami faqat raqamlardan iborat bo'lishi kerak")
    .isLength({ min: 9, max: 15 })
    .withMessage("Telefon raqami 9-15 ta raqamdan iborat bo'lishi kerak"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
