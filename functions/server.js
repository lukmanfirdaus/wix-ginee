const express = require('express');
const serverless = require('serverless-http');
const app = express();
const mainRoutes = require('../routes');

app.use('/', mainRoutes);

module.exports.handler = serverless(app); 