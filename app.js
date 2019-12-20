/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');

const router = require('./routes/index');

require('dotenv').config();
require('./connections/database');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.EXPRESS_PORT);
