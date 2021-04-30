require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const { userRouter, loginRouter } = require('./controllers');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('./middlewares/creationUserValidations');
const { validateEmailOnLogin, validatePasswordOnLogin } = require('./middlewares/loginValidations');
const validateToken = require('./auth/validateToken');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT);
console.log(`Server rodando a porta: ${PORT}`);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', validateEmailOnLogin, validatePasswordOnLogin, loginRouter.login);

app.get('/user', validateToken, userRouter.getAll);
app.get('/user/:id', validateToken, userRouter.findByID);
app.post('/user', validateDisplayName, validateEmail, validatePassword, userRouter.createUser);
