const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require('./db');
const { populateDatabase, isDatabasePopulated } = require('./populate');

const server = express();

server.use(express.json());
server.use(cors());

server.use(async (req, res, next) => {
    try {
        // Operaciones asíncronas dentro del bloque try
        await conn.sync();
        console.log('Conexión establecida con la base de datos.');

        // Verifica si la base de datos ya está poblada
        const isPopulated = await isDatabasePopulated();

        if (!isPopulated) {
            console.log('La base de datos aún no ha sido poblada. Iniciando proceso de poblado...');
            await populateDatabase();
            console.log('Base de datos poblada correctamente.');
            next(); // Llama a next() para pasar al siguiente middleware o ruta
        } else {
            console.log('La base de datos ya está poblada.');
        }
    } catch (error) {
        // Manejo de errores dentro del bloque catch
        console.error('Error al inicializar la aplicación:', error);
        process.exit(1); // Sale de la aplicación con un código de error
    }
});

server.use(morgan("dev"));
server.use(router);

module.exports = server;