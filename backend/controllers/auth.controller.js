// controllers/auth.controller.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

exports.register = async (req, res) => {
  try {
    const { role, firstName, lastName, userName, password, phone } = req.body;

    let Model;
    switch (role) {
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
        return res.status(400).json({ message: "Noto'g'ri rol" });
    }

    // Check if user exists
    const existingUser = await Model.findOne({ where: { userName: userName } });
    if (existingUser) {
      return res.status(400).json({ message: "Bu foydalanuvchi nomi band" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await Model.create({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
      phone,
      role,
    });

    // Send notification
    await db.Notification.create({
      userId: user.id,
      userType: role,
      title: "Xush kelibsiz!",
      message: `${firstName}, tizimga muvaffaqiyatli ro'yxatdan o'tdingiz!`,
      type: "success",
    });

    res.status(201).json({
      message: "Muvaffaqiyatli ro'yxatdan o'tdingiz",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password, role } = req.body;

    let Model;
    switch (role) {
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
        return res.status(400).json({ message: "Noto'g'ri rol" });
    }

    const user = await Model.findOne({ where: { userName } });
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Parol noto'g'ri" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({
      message: "Muvaffaqiyatli kirildi",
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};
