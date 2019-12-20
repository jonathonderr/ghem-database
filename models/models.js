/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const schemas = require('../models/schemas');

// eslint-disable-next-line new-cap
const Alert = new mongoose.model('Alerts', schemas.alert);


module.exports.Alert = Alert;
