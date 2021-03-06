module.exports = (sequelize, DATATYPES) => {
  const Burger = sequelize.define("burger", {
    id: {
      type: SEQUELIZE.UUID,
      primaryKey: true,
      defaultValue: SEQUELIZE.UUIDV4
    },
    name: {
      type: SEQUELIZE.string,
      required: true,
      validate: {
        isAlphanumeric: true
      }
    },
    devoured: {
      type: SEQUELIZE.boolean,
      defaultValue: false,
      require: true
    },
    eater_id: {
      type: SEQUELIZE.UUID
    }
  });
  return Burger;
};
