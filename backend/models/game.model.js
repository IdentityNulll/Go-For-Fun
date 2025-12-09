module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      organizerId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "organizer_id",
      },
      startDate: {
        type: DataTypes.DATE,
        field: "start_date",
      },
      endDate: {
        type: DataTypes.DATE,
        field: "end_date",
      },
      location: {
        type: DataTypes.STRING,
      },
      maxPlayers: {
        type: DataTypes.INTEGER,
        field: "max_players",
      },
      registeredPlayers: {
        type: DataTypes.TEXT,
        field: "registered_players",
        get() {
          const value = this.getDataValue("registeredPlayers");
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue("registeredPlayers", JSON.stringify(value));
        },
      },
      status: {
        type: DataTypes.ENUM("upcoming", "ongoing", "completed", "cancelled"),
        defaultValue: "upcoming",
      },
    },
    {
      tableName: "games",
      timestamps: true,
    }
  );

  return Game;
};
