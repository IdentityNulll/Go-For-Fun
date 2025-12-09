module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    "Player",
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
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "user_name",
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
      role: {
        type: DataTypes.STRING,
        defaultValue: "player",
      },
    },
    {
      tableName: "players",
      timestamps: true,
    }
  );

  return Player;
};
