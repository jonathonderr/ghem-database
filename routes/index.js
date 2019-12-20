/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const alertRouter = require('./alert');

const router = express.Router();

router.use('/alerts', alertRouter);

module.exports = router;
