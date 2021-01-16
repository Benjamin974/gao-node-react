const desktopRoutes = require('./routes.js');
const express = require('express');
const path = require('path');

const headerApi = require('./middleware/configApi');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(headerApi);

app.use('/api', desktopRoutes);

module.exports = app;