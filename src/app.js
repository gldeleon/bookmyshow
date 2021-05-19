const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Controllers

app.use(require('./controllers/authController'));
app.use(require('./controllers/moviesController'));

module.exports = app;
