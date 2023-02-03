const express = require('express');

const app = express();

const loginRouter = require('./routers/login.routers');

app.use(express.json());

app.use(loginRouter);

module.exports = app;
