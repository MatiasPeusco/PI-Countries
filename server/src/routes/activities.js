const { Router } = require("express");
const { Op } = require("sequelize");
const { Activity } = require("../db");
const errorHandler = require("../middlewares/errorHandler");

const router = Router();

module.exports = router;

