require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new express();

const routes = require('./routes');

const PORT = 4600;

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));