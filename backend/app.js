require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const NotFound = require('./errors/NotFound');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { validateLogin, validateRegistration } = require('./middlewares/validation');

const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(requestLogger);
app.post('/signin', validateLogin, login);
app.post('/signup', validateRegistration, createUser);
app.use(auth);
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use(errorLogger);
app.use('*', (req, res, next) => {
  next(new NotFound('Страница не существует.'));
});

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Что-то пошло не так' } = err;
  res.status(statusCode).send({ message });

  next();
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
