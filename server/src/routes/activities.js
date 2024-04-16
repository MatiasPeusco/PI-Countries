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

module.exports = router;