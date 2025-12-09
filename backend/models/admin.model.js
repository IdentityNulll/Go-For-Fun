module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
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
      totalHistoryGame: {
        type: DataTypes.TEXT,
        field: "total_history_game",
        get() {
          const value = this.getDataValue("totalHistoryGame");
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue("totalHistoryGame", JSON.stringify(value));
        },
      },
      createOrganizer: {
        type: DataTypes.TEXT,
        field: "create_organizer",
        get() {
          const value = this.getDataValue("createOrganizer");
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue("createOrganizer", JSON.stringify(value));
        },
      },
      allUser: {
        type: DataTypes.TEXT,
        field: "all_user",
        get() {
          const value = this.getDataValue("allUser");
          return value ? JSON.parse(value) : [];
        },
        set(value) {
          this.setDataValue("allUser", JSON.stringify(value));
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "admin",
      },
    },
    {
      tableName: "admins",
      timestamps: true,
    }
  );

  return Admin;
};
