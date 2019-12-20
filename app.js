/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const router = require('./routes/index');

require('dotenv').config();
require('./connections/database');

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.EXPRESS_PORT);
