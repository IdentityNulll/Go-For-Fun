// controllers/admin.controller.js
const db = require("../models");

exports.getAllUsers = async (req, res) => {
  try {
    const players = await db.Player.findAll({
      attributes: { exclude: ["password"] },
    });
    const organizers = await db.Organizer.findAll({
      attributes: { exclude: ["password"] },
    });
    const admins = await db.Admin.findAll({
      attributes: { exclude: ["password"] },
    });

    const allUsers = [
      ...players.map((p) => ({ ...p.toJSON(), userType: "player" })),
      ...organizers.map((o) => ({ ...o.toJSON(), userType: "organizer" })),
      ...admins.map((a) => ({ ...a.toJSON(), userType: "admin" })),
    ];

    res.json({ users: allUsers });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.getAllGames = async (req, res) => {
  try {
    const games = await db.Game.findAll({
      include: [
        {
          model: db.Organizer,
          as: "organizer",
          attributes: ["id", "firstName", "lastName", "username"],
        },
      ],
    });

    res.json({ games });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.createOrganizer = async (req, res) => {
  try {
    const { firstName, lastName, username, password, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const organizer = await db.Organizer.create({
      firstName,
      lastName,
      username,
      password: hashedPassword,
      phone,
    });

    // Send notification to organizer
    await db.Notification.create({
      userId: organizer.id,
      userType: "organizer",
      title: "Akkaunt yaratildi",
      message: "Sizning organizer akkauntingiz admin tomonidan yaratildi",
      type: "success",
    });

    res.status(201).json({
      message: "Organizer muvaffaqiyatli yaratildi",
      organizer: {
        id: organizer.id,
        firstName: organizer.firstName,
        lastName: organizer.lastName,
        username: organizer.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId, userType } = req.params;

    let Model;
    switch (userType) {
      case "player":
        Model = db.Player;
        break;
      case "organizer":
        Model = db.Organizer;
        break;
      case "admin":
        Model = db.Admin;
        break;
      default:
        return res
          .status(400)
          .json({ message: "Noto'g'ri foydalanuvchi turi" });
    }

    const deleted = await Model.destroy({ where: { id: userId } });

    if (deleted) {
      res.json({ message: "Foydalanuvchi o'chirildi" });
    } else {
      res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};
