const { Router } = require("express");
const { Op } = require("sequelize");
const { Country } = require("../db");
const errorHandler = require("../middlewares/errorHandler");

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const { name, continent } = req.query; // Obtener los valores de los parámetros de consulta

        let filter = {}; // Objeto para almacenar los filtros de búsqueda dinámicos

        // Agregar filtro por nombre si se proporciona el parámetro 'name'
        if (name) {
            filter.name = {
                [Op.iLike]: `%${name}%`
            };
        }

        // Agregar filtro por continente si se proporciona el parámetro 'continent'
        if (continent) {
            filter.continent = continent;
        }

        // Realizar la búsqueda en la base de datos con los filtros aplicados
        const countries = await Country.findAll({
            where: filter // Aplicar los filtros dinámicos
        });

        // Verificar si se encontraron países
        if (countries.length === 0) {
            return res.status(404).json({ message: 'No se encontraron países que coincidan con los filtros proporcionados.' });
        }

        // Devolver la lista de países que coinciden con los filtros
        return res.status(200).json(countries);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id.toString(); // Obtiene el ID de la URL
        const country = await Country.findByPk(id);
        if (!country) {
            return res.status(404).json({ message: 'País no encontrado' });
        }
        res.status(200).json(country);
    } catch (error) {
        next(error);
    }
});

module.exports = router;