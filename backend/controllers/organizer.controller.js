exports.getMyGames = async (req, res) => {
  try {
    const organizerId = req.user.id;

    const games = await db.Game.findAll({
      where: { organizerId }
    });

    res.json({ games });
  } catch (error) {
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};

exports.createGame = async (req, res) => {
  try {
    const organizerId = req.user.id;
    const { title, description, startDate, endDate, location, maxPlayers } = req.body;

    const game = await db.Game.create({
      title,
      description,
      organizerId,
      startDate,
      endDate,
      location,
      maxPlayers
    });

    // Send notification to organizer
    await db.Notification.create({
      userId: organizerId,
      userType: 'organizer',
      title: 'Yangi o\'yin yaratildi',
      message: `"${title}" o'yini muvaffaqiyatli yaratildi`,
      type: 'success',
      link: `/games/${game.id}`
    });

    res.status(201).json({ 
      message: 'O\'yin muvaffaqiyatli yaratildi',
      game 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const organizerId = req.user.id;
    const { gameId } = req.params;
    const updateData = req.body;

    const game = await db.Game.findOne({
      where: { id: gameId, organizerId }
    });

    if (!game) {
      return res.status(404).json({ message: 'O\'yin topilmadi yoki sizga tegishli emas' });
    }

    await game.update(updateData);

    res.json({ message: 'O\'yin yangilandi', game });
  } catch (error) {
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const organizerId = req.user.id;
    const { gameId } = req.params;

    const deleted = await db.Game.destroy({
      where: { id: gameId, organizerId }
    });

    if (deleted) {
      res.json({ message: 'O\'yin o\'chirildi' });
    } else {
      res.status(404).json({ message: 'O\'yin topilmadi yoki sizga tegishli emas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
};