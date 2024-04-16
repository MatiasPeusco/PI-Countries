const { Router } = require("express");
const { Op } = require("sequelize");
const { Country } = require("../db");
const errorHandler = require("../middlewares/errorHandler");

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query; // Obtener el valor del parámetro de consulta 'name'

        if (name) {
            // Si se proporciona el parámetro de consulta 'name', buscar países por nombre
            const countries = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%` // Utilizar Op.iLike para buscar de manera insensible a mayúsculas y minúsculas
                    }
                }
            });

            if (countries.length === 0) {
                return res.status(404).json({ message: 'No se encontraron países con ese nombre.' });
            }

            return res.status(200).json(countries);
        } else {
            // Si no se proporciona el parámetro de consulta 'name', obtener todos los países
            const countries = await Country.findAll();
            return res.status(200).json(countries);
        }
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