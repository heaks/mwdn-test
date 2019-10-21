const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error
}

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = new express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

module.exports = app;