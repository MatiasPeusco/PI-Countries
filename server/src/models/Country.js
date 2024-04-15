const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3), // Código de tres letras
      primaryKey: true, // Define la clave primaria
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Nombre
    },
    flagImage: {
      type: DataTypes.STRING, // Imagen de la bandera
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false, // Continente
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false, // Capital
    },
    subregion: {
      type: DataTypes.STRING, // Subregión
    },
    area: {
      type: DataTypes.FLOAT, // Área
    },
    population: {
      type: DataTypes.INTEGER, // Población
    },
  });
};