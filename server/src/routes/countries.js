const { Router } = require("express");
const { Op } = require("sequelize");
const { Country } = require("../db");

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        next(error);
    }
});

module.exports = router;