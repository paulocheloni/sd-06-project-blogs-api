const secret = 'shh';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  secret,
  jwtConfig,
};
