// // models/index.js
// const { Sequelize } = require("sequelize");
// const config = require("../config/database");

// const sequelize = new Sequelize(config.development);

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// // Import models
// db.Player = require("./player.model")(sequelize, Sequelize);
// db.Admin = require("./admin.model")(sequelize, Sequelize);
// db.Organizer = require("./organizer.model")(sequelize, Sequelize);
// db.Game = require("./game.model")(sequelize, Sequelize);
// db.Notification = require("./notification.model")(sequelize, Sequelize);

// // Associations
// db.Organizer.hasMany(db.Game, { foreignKey: "organizerId", as: "games" });
// db.Game.belongsTo(db.Organizer, { foreignKey: "organizerId", as: "organizer" });

// db.Player.hasMany(db.Notification, {
//   foreignKey: "userId",
//   as: "notifications",
// });
// db.Organizer.hasMany(db.Notification, {
//   foreignKey: "userId",
//   as: "notifications",
// });
// db.Admin.hasMany(db.Notification, {
//   foreignKey: "userId",
//   as: "notifications",
// });

// module.exports = db;


















// models/index.js
const Sequelize = require("sequelize");
const sequelize = require("../config/database"); // Bu SENING yozgan ulanishing!

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Player = require("./player.model")(sequelize, Sequelize);
db.Admin = require("./admin.model")(sequelize, Sequelize);
db.Organizer = require("./organizer.model")(sequelize, Sequelize);
db.Game = require("./game.model")(sequelize, Sequelize);
db.Notification = require("./notification.model")(sequelize, Sequelize);

// Associations
db.Organizer.hasMany(db.Game, { foreignKey: "organizerId", as: "games" });
db.Game.belongsTo(db.Organizer, { foreignKey: "organizerId", as: "organizer" });

db.Player.hasMany(db.Notification, {
  foreignKey: "userId",
  as: "notifications",
});
db.Organizer.hasMany(db.Notification, {
  foreignKey: "userId",
  as: "notifications",
});
db.Admin.hasMany(db.Notification, {
  foreignKey: "userId",
  as: "notifications",
});

module.exports = db;
