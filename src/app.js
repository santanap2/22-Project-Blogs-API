const express = require('express');

const app = express();

const loginRouter = require('./routers/login.routers');
const userRouter = require('./routers/user.routers');
const categoriesRouter = require('./routers/catogories.routers');
const postRouter = require('./routers/post.routers');

app.use(express.json());
app.use(loginRouter);
app.use(userRouter);
app.use(categoriesRouter);
app.use(postRouter);

module.exports = app;
