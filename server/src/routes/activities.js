const { Router } = require("express");
const { Op } = require("sequelize");
const { Activity } = require("../db");
const errorHandler = require("../middlewares/errorHandler");

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;

        // Crea la actividad en la base de datos
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        // Asocia la actividad con los países proporcionados
        if (countries && countries.length > 0) {
            await activity.setCountries(countries); // Utiliza el método setCountries proporcionado por Sequelize
        }

        res.status(201).json(activity); // Devuelve la actividad creada con éxito
    } catch (error) {
        next(error);
    }
});

module.exports = router;