const express = require('express');
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const app = express();

app.use('/', homeRoutes); 
app.use('/api', apiRoutes);


module.exports = app;
