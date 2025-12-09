// controllers/player.controller.js
exports.getAvailableGames = async (req, res) => {
  try {
    const games = await db.Game.findAll({
      where: { status: "upcoming" },
      include: [
        {
          model: db.Organizer,
          as: "organizer",
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    res.json({ games });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.registerForGame = async (req, res) => {
  try {
    const playerId = req.user.id;
    const { gameId } = req.params;

    const game = await db.Game.findByPk(gameId);
    if (!game) {
      return res.status(404).json({ message: "O'yin topilmadi" });
    }

    const registeredPlayers = game.registeredPlayers || [];

    if (registeredPlayers.includes(playerId)) {
      return res
        .status(400)
        .json({ message: "Siz allaqachon ro'yxatdan o'tgansiz" });
    }

    if (registeredPlayers.length >= game.maxPlayers) {
      return res.status(400).json({ message: "O'yinda joy yo'q" });
    }

    registeredPlayers.push(playerId);
    await game.update({ registeredPlayers });

    // Send notification to player
    await db.Notification.create({
      userId: playerId,
      userType: "player",
      title: "O'yinga ro'yxatdan o'tdingiz",
      message: `"${game.title}" o'yiniga muvaffaqiyatli ro'yxatdan o'tdingiz`,
      type: "success",
      link: `/games/${gameId}`,
    });

    // Send notification to organizer
    await db.Notification.create({
      userId: game.organizerId,
      userType: "organizer",
      title: "Yangi ishtirokchi",
      message: `"${game.title}" o'yiniga yangi ishtirokchi qo'shildi`,
      type: "info",
      link: `/games/${gameId}`,
    });

    res.json({ message: "Muvaffaqiyatli ro'yxatdan o'tdingiz", game });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};
