require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new express();

const routes = require('./routes');

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;