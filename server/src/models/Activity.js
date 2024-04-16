const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false, // Nombre
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false, // Dificultad
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false, // Duración
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: false, // Temporada
        },
    });
};