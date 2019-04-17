module.exports = (sequelize, DATATYPES) => {
  const Eater = sequelize.define("eater", {
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
    burgers_eaten: {
      type: SEQUELIZE.UUID
    }
  });
  return Eater;
};
