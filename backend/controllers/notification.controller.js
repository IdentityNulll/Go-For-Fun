exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const userType = req.user.role;

    const notifications = await db.Notification.findAll({
      where: { userId, userType },
      order: [["createdAt", "DESC"]],
    });

    res.json({ notifications });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const userId = req.user.id;

    const notification = await db.Notification.findOne({
      where: { id: notificationId, userId },
    });

    if (!notification) {
      return res.status(404).json({ message: "Xabar topilmadi" });
    }

    await notification.update({ isRead: true });

    res.json({ message: "Xabar o'qilgan deb belgilandi" });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.markAllAsRead = async (req, res) => {
  try {
    const userId = req.user.id;
    const userType = req.user.role;

    await db.Notification.update(
      { isRead: true },
      { where: { userId, userType, isRead: false } }
    );

    res.json({ message: "Barcha xabarlar o'qilgan deb belgilandi" });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};
