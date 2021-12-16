const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

module.exports = app;