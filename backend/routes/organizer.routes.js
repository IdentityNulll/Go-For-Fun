// const express = require("express");
// const router = express.Router();
// const organizerController = require("../controllers/organizer.controller");
// const { verifyToken, isOrganizer } = require("../middleware/auth");
// const {
//   createGameValidation,
//   updateGameValidation,
// } = require("../validations/game.validator");

// // All organizer routes require authentication and organizer role
// router.use(verifyToken, isOrganizer);

// router.get("/games", organizerController.getMyGames);
// router.post("/games", createGameValidation, organizerController.createGame);
// router.put(
//   "/games/:gameId",
//   updateGameValidation,
//   organizerController.updateGame
// );
// router.delete("/games/:gameId", organizerController.deleteGame);

// module.exports = router;

















const express = require("express");
const router = express.Router();
const organizerController = require("../controllers/organizer.controller");
const { verifyToken, isOrganizer } = require("../middleware/auth");
const {
  createGameValidation,
  updateGameValidation,
} = require("../validations/game.validator");

/**
 * @swagger
 * /api/organizer/games:
 *   get:
 *     tags: [Organizer]
 *     summary: Mening o'yinlarim
 *     description: Organizer o'zi yaratgan barcha o'yinlarni ko'rish
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
 *                       startDate:
 *                         type: string
 *                       endDate:
 *                         type: string
 *                       location:
 *                         type: string
 *                       maxPlayers:
 *                         type: integer
 *                       registeredPlayers:
 *                         type: array
 *                       status:
 *                         type: string
 *       403:
 *         description: Faqat organizer uchun
 */
router.get("/games", verifyToken, isOrganizer, organizerController.getMyGames);

/**
 * @swagger
 * /api/organizer/games:
 *   post:
 *     tags: [Organizer]
 *     summary: Yangi o'yin yaratish
 *     description: Organizer yangi o'yin e'lon qilish
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - startDate
 *               - maxPlayers
 *             properties:
 *               title:
 *                 type: string
 *                 example: Futbol turniri
 *               description:
 *                 type: string
 *                 example: Yoshlar uchun futbol turniri
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-12-20T10:00:00Z
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-12-20T18:00:00Z
 *               location:
 *                 type: string
 *                 example: Toshkent, Milliy stadion
 *               maxPlayers:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       201:
 *         description: O'yin muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       403:
 *         description: Faqat organizer uchun
 */
router.post(
  "/games",
  verifyToken,
  isOrganizer,
  createGameValidation,
  organizerController.createGame
);

/**
 * @swagger
 * /api/organizer/games/{gameId}:
 *   put:
 *     tags: [Organizer]
 *     summary: O'yinni yangilash
 *     description: Organizer o'z o'yinini tahrirlash
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: gameId
 *         required: true
 *         schema:
 *           type: integer
 *         description: O'yin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               location:
 *                 type: string
 *               maxPlayers:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [upcoming, ongoing, completed, cancelled]
 *     responses:
 *       200:
 *         description: O'yin yangilandi
 *       404:
 *         description: O'yin topilmadi
 *       403:
 *         description: Sizga tegishli emas
 */
router.put(
  "/games/:gameId",
  verifyToken,
  isOrganizer,
  updateGameValidation,
  organizerController.updateGame
);

/**
 * @swagger
 * /api/organizer/games/{gameId}:
 *   delete:
 *     tags: [Organizer]
 *     summary: O'yinni o'chirish
 *     description: Organizer o'z o'yinini o'chirish
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: gameId
 *         required: true
 *         schema:
 *           type: integer
 *         description: O'yin ID
 *     responses:
 *       200:
 *         description: O'yin o'chirildi
 *       404:
 *         description: O'yin topilmadi
 *       403:
 *         description: Sizga tegishli emas
 */
router.delete(
  "/games/:gameId",
  verifyToken,
  isOrganizer,
  organizerController.deleteGame
);

module.exports = router;
