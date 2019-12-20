/* eslint-disable import/no-extraneous-dependencies */
const { Schema } = require('mongoose');

const alertDef = require('./schemadefs/alert.js');

const alertSchema = new Schema(alertDef);

module.exports.alert = alertSchema;
