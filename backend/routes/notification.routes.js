// const express = require("express");
// const router = express.Router();
// const notificationController = require("../controllers/notification.controller");
// const { verifyToken } = require("../middleware/auth");

// // All notification routes require authentication
// router.use(verifyToken);

// router.get("/", notificationController.getNotifications);
// router.put("/:notificationId/read", notificationController.markAsRead);
// router.put("/read-all", notificationController.markAllAsRead);

// module.exports = router;













// routes/notification.routes.js
const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");
const { verifyToken } = require("../middleware/auth");

/**
 * @swagger
 * /api/notifications:
 *   get:
 *     tags: [Notifications]
 *     summary: Xabarlar ro'yxati
 *     description: Foydalanuvchi barcha xabarlarini ko'rish
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Xabarlar ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 notifications:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       message:
 *                         type: string
 *                       type:
 *                         type: string
 *                         enum: [info, warning, success, error]
 *                       isRead:
 *                         type: boolean
 *                       link:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *       403:
 *         description: Token kerak
 */
router.get("/", verifyToken, notificationController.getNotifications);

/**
 * @swagger
 * /api/notifications/{notificationId}/read:
 *   put:
 *     tags: [Notifications]
 *     summary: Xabarni o'qilgan deb belgilash
 *     description: Bitta xabarni o'qilgan deb belgilash
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: notificationId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Xabar ID
 *     responses:
 *       200:
 *         description: Xabar o'qilgan deb belgilandi
 *       404:
 *         description: Xabar topilmadi
 */
router.put(
  "/:notificationId/read",
  verifyToken,
  notificationController.markAsRead
);

/**
 * @swagger
 * /api/notifications/read-all:
 *   put:
 *     tags: [Notifications]
 *     summary: Barcha xabarlarni o'qilgan deb belgilash
 *     description: Foydalanuvchi barcha xabarlarini o'qilgan deb belgilash
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Barcha xabarlar o'qilgan deb belgilandi
 */
router.put("/read-all", verifyToken, notificationController.markAllAsRead);

module.exports = router;