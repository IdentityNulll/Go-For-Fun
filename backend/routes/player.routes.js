// const express = require("express");
// const router = express.Router();
// const playerController = require("../controllers/player.controller");
// const { verifyToken, isPlayer } = require("../middleware/auth");

// // All player routes require authentication and player role
// router.use(verifyToken, isPlayer);

// router.get("/games", playerController.getAvailableGames);
// router.post("/games/:gameId/register", playerController.registerForGame);

// module.exports = router;

















const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player.controller");
const { verifyToken, isPlayer } = require("../middleware/auth");

/**
 * @swagger
 * /api/player/games:
 *   get:
 *     tags: [Player]
 *     summary: Mavjud o'yinlar
 *     description: Player ro'yxatdan o'tishi mumkin bo'lgan o'yinlar
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
 *                       location:
 *                         type: string
 *                       maxPlayers:
 *                         type: integer
 *                       registeredPlayers:
 *                         type: array
 *                       organizer:
 *                         type: object
 *       403:
 *         description: Faqat player uchun
 */
router.get("/games", verifyToken, isPlayer, playerController.getAvailableGames);

/**
 * @swagger
 * /api/player/games/{gameId}/register:
 *   post:
 *     tags: [Player]
 *     summary: O'yinga ro'yxatdan o'tish
 *     description: Player o'yinga ro'yxatdan o'tadi
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
 *         description: Muvaffaqiyatli ro'yxatdan o'tdingiz
 *       400:
 *         description: Allaqachon ro'yxatdan o'tgansiz yoki joy yo'q
 *       404:
 *         description: O'yin topilmadi
 *       403:
 *         description: Faqat player uchun
 */
router.post(
  "/games/:gameId/register",
  verifyToken,
  isPlayer,
  playerController.registerForGame
);

module.exports = router;