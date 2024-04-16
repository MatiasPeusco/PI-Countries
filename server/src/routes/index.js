const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const { populateDatabase } = require('./src/populate.js'); // Suponiendo que tengas una función para poblar la base de datos

const PORT = 3001;

conn.sync({ force: false }) // Utiliza { force: false } para evitar que la base de datos se reinicie
    .then(async () => {
        // Verificar si la tabla Country está vacía
        const countriesCount = await Country.count();
        console.log("La db tiene:", countriesCount, "paises");
        if (countriesCount === 0) {
            // Si la tabla está vacía, poblamos la base de datos
            await populateDatabase();
        }

        // Iniciar el servidor
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));