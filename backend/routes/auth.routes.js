// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/auth.controller");
// const {
//   registerValidation,
//   loginValidation,
// } = require("../validations/auth.validator");
// const { authLimiter } = require("../middleware/rateLimiter");

// router.post(
//   "/register",
//   authLimiter,
//   registerValidation,
//   authController.register
// );
// router.post("/login", authLimiter, loginValidation, authController.login);

// module.exports = router;














const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const {
  registerValidation,
  loginValidation,
} = require("../validations/auth.validator");
const { authLimiter } = require("../middleware/rateLimiter");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Yangi foydalanuvchi ro'yxatdan o'tkazish
 *     description: Player, Organizer yoki Admin ro'yxatdan o'tkazish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - role
 *               - firstName
 *               - lastName
 *               - userName
 *               - password
 *               - phone
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [player, organizer, admin]
 *                 example: player
 *               firstName:
 *                 type: string
 *                 example: Aziz
 *               lastName:
 *                 type: string
 *                 example: Karimov
 *               userName:
 *                 type: string
 *                 example: aziz_player
 *               password:
 *                 type: string
 *                 example: secret123
 *               phone:
 *                 type: number
 *                 example: 998901234567
 *     responses:
 *       201:
 *         description: Muvaffaqiyatli ro'yxatdan o'tdingiz
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Muvaffaqiyatli ro'yxatdan o'tdingiz
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                     userName:
 *                       type: string
 *                     role:
 *                       type: string
 *       400:
 *         description: Validatsiya xatosi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server xatosi
 */
router.post(
  "/register",
  authLimiter,
  registerValidation,
  authController.register
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Tizimga kirish
 *     description: Username, password va rol orqali tizimga kirish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - password
 *               - role
 *             properties:
 *               userName:
 *                 type: string
 *                 example: aziz_player
 *               password:
 *                 type: string
 *                 example: secret123
 *               role:
 *                 type: string
 *                 enum: [player, organizer, admin]
 *                 example: player
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli kirildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Muvaffaqiyatli kirildi
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   type: object
 *       401:
 *         description: Parol noto'g'ri
 *       404:
 *         description: Foydalanuvchi topilmadi
 */
router.post("/login", authLimiter, loginValidation, authController.login);

module.exports = router;