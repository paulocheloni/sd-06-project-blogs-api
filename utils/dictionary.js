const statusCode = {
  SUCCESS: 200,
  SUCCESS_CREATED: 201,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  BAD_REQUEST: 400,
};

const statusMsg = {
  NAME_LENGTH: '"displayName" length must be at least 8 characters long',
  EMAIL_VALID: '"email" must be a valid email',
  EMAIL_REQUIRED: '"email" is required',
  EMAIL_EMPTY: '"email" is not allowed to be empty',
  USER_EXISTS: 'Usuário já existe',
  USER_NOT_EXISTS: 'Usuário não existe',
  PASSWORD_LENGTH: '"password" length must be 6 characters long',
  PASSWORD_REQUIRED: '"password" is required',
  PASSWORD_EMPTY: '"password" is not allowed to be empty',
  FIELD_INVALID: 'Campos inválidos',
  TOKEN_EMPTY: 'Token não encontrado',
  TOKEN_INVALID: 'Token expirado ou inválido',
};

const jwtSecret = 'ofFrenchCuisineIsButterAndButter';

const jwtHeaders = {
  algorithm: 'HS256',
  expiresIn: '5d',
};

module.exports = {
  statusCode,
  statusMsg,
  jwtSecret,
  jwtHeaders,
};
