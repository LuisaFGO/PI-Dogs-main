const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    peso:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    añosDeVida:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });
};
