const { Router } = require("express");
const { Op } = require("sequelize");
const { Country } = require("../db");
const errorHandler = require("../middlewares/errorHandler");

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
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