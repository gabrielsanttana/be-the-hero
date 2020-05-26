const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {errors} = require('celebrate');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;