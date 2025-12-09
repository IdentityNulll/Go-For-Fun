module.exports = (sequelize, DataTypes) => {
  const Organizer = sequelize.define(
    "Organizer",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      historyGame: {
        type: DataTypes.TEXT,
        field: "history_game",
        get() {
          const value = this.getDataValue("historyGame");
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue("historyGame", JSON.stringify(value));
        },
      },
      createGames: {
        type: DataTypes.TEXT,
        field: "create_games",
        get() {
          const value = this.getDataValue("createGames");
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue("createGames", JSON.stringify(value));
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "organizer",
      },
    },
    {
      tableName: "organizers",
      timestamps: true,
    }
  );

  return Organizer;
};
