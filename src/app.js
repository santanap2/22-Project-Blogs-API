const express = require('express');

const app = express();

const loginRouter = require('./routers/login.routers');
const userRouter = require('./routers/user.routers');

app.use(express.json());
app.use(loginRouter);
app.use(userRouter);

module.exports = app;
