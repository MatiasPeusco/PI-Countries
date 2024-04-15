const { Router } = require('express');
const countriesRouter = require('./countries.js')

const router = Router();

router.use('/countries', countriesRouter);

module.exports = router;