const express = require('express');

const { User } = require('../models');
const userServ = require('../Service/UserValidations');
const tken = require('../Service/TokenCreate');
const tk = require('../Service/TokenValidad');

const userRouter = express.Router();

userRouter.get('/:id', tk.allUsersverification, userServ.userByIdVerification, async (req, res) => {
  const [user] = req.user;
  res.status(200).json(user);
});

userRouter.get('/', tk.allUsersverification, userServ.findAll, async (req, res) => {
  res.status(200).json(req.users);
});

userRouter.post('/', userServ.nameVerification, userServ.passwordVerification, userServ.emailVerification, async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await User.create({ displayName, email, password, image });
  const token = tken.createToken({ id: newUser.id, displayName, email, image });
  res.status(201).json({ token });
});

userRouter.delete('/me', tk.allUsersverification, async (req, res) => {
  const { id } = req.myUser;
  await User.destroy({ where: { id } });
  res.status(204).json();
});

module.exports = userRouter;
