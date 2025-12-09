// const express = require("express");
// const router = express.Router();
// const adminController = require("../controllers/admin.controller");
// const { verifyToken, isAdmin } = require("../middleware/auth");
// const {
//   createOrganizerValidation,
// } = require("../validations/organizer.validation");

// // All admin routes require authentication and admin role
// router.use(verifyToken, isAdmin);

// router.get("/users", adminController.getAllUsers);
// router.get("/games", adminController.getAllGames);
// router.post(
//   "/organizers",
//   createOrganizerValidation,
//   adminController.createOrganizer
// );
// router.delete("/users/:userType/:userId", adminController.deleteUser);

// module.exports = router;


















const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { verifyToken, isAdmin } = require("../middleware/auth");
const {
  createOrganizerValidation,
} = require("../validations/organizer.validation");

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     tags: [Admin]
 *     summary: Barcha foydalanuvchilarni olish
 *     description: Player, Organizer va Admin ro'yxatini olish (faqat admin)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Foydalanuvchilar ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       firstName:
 *                         type: string
 *                       lastName:
 *                         type: string
 *                       userName:
 *                         type: string
 *                       phone:
 *                         type: integer
 *                       role:
 *                         type: string
 *                       userType:
 *                         type: string
 *       403:
 *         description: Faqat admin uchun
 *       500:
 *         description: Server xatosi
 */
router.get("/users", verifyToken, isAdmin, adminController.getAllUsers);

/**
 * @swagger
 * /api/admin/games:
 *   get:
 *     tags: [Admin]
 *     summary: Barcha o'yinlarni olish
 *     description: Tizimda mavjud barcha o'yinlar ro'yxati (faqat admin)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: O'yinlar ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 games:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       organizerId:
 *                         type: integer
 *                       startDate:
 *                         type: string
 *                       endDate:
 *                         type: string
 *                       location:
 *                         type: string
 *                       maxPlayers:
 *                         type: integer
 *                       status:
 *                         type: string
 *                       organizer:
 *                         type: object
 *       403:
 *         description: Faqat admin uchun
 */
router.get("/games", verifyToken, isAdmin, adminController.getAllGames);

/**
 * @swagger
 * /api/admin/organizers:
 *   post:
 *     tags: [Admin]
 *     summary: Yangi organizer yaratish
 *     description: Admin tomonidan yangi organizer yaratish
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - username
 *               - password
 *               - phone
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Davron
 *               lastName:
 *                 type: string
 *                 example: Yusupov
 *               username:
 *                 type: string
 *                 example: davron_org
 *               password:
 *                 type: string
 *                 example: secret123
 *               phone:
 *                 type: number
 *                 example: 998901234567
 *     responses:
 *       201:
 *         description: Organizer muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       403:
 *         description: Faqat admin uchun
 */
router.post(
  "/organizers",
  verifyToken,
  isAdmin,
  createOrganizerValidation,
  adminController.createOrganizer
);

/**
 * @swagger
 * /api/admin/users/{userType}/{userId}:
 *   delete:
 *     tags: [Admin]
 *     summary: Foydalanuvchini o'chirish
 *     description: Admin tomonidan foydalanuvchini o'chirish
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [player, organizer, admin]
 *         description: Foydalanuvchi turi
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Foydalanuvchi ID
 *     responses:
 *       200:
 *         description: Foydalanuvchi o'chirildi
 *       404:
 *         description: Foydalanuvchi topilmadi
 *       403:
 *         description: Faqat admin uchun
 */
router.delete(
  "/users/:userType/:userId",
  verifyToken,
  isAdmin,
  adminController.deleteUser
);

module.exports = router;