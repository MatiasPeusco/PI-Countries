const axios = require('axios');
const { Country } = require('./db');

// Función para poblar la base de datos con la información de los países
async function populateDatabase() {
    try {
        // Realiza una solicitud GET al servidor json-server para obtener los datos de los países
        console.log('Obteniendo datos de los países...');
        const response = await axios.get('http://localhost:5000/countries');
        const countriesData = response.data;

        // Itera sobre cada país en los datos recibidos
        for (const countryData of countriesData) {
            // Crea una entrada correspondiente en la base de datos utilizando el modelo Country
            console.log(`Poblando la base de datos con el país ${countryData.name.common}`);
            await Country.create({
                id: countryData.cca3,
                name: countryData.name.common,
                flagImage: countryData.flags.png,
                continent: countryData.continents[0],
                capital: countryData.capital && countryData.capital.length > 0 ? countryData.capital[0] : 'N/A',
                subregion: countryData.subregion,
                area: parseInt(countryData.area),
                population: countryData.population
            });
        }
        console.log('Base de datos poblada correctamente con la información de los países.');
    } catch (error) {
        console.error('Error al poblar la base de datos:', error);
    }
}

module.exports = { populateDatabase, isDatabasePopulated };