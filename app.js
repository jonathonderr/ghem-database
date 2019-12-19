/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

require('dotenv').config();

const app = express();

app.listen(process.env.EXPRESS_PORT);
