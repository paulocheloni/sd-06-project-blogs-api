const jwt = require('jsonwebtoken');

const secret = 'projectBlogsApi';

const headers = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, headers);
  return token;
};

module.exports = createToken;
