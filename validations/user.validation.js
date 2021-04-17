const { StatusCodes } = require('http-status-codes');

const AppErr = (code, message) => ({ code, message });

const validateEmail = (email) => (/^(\w)+([-_.])?(\w)+@([A-Z])+(\.com)$/i).test(email);

module.exports = (displayName, email, password) => {
  switch (true) {
    case (!displayName): throw new AppErr(StatusCodes.BAD_REQUEST, '"displayName" is required');
    case (!email): throw new AppErr(StatusCodes.BAD_REQUEST, '"email" is required');
    case (!password): throw new AppErr(StatusCodes.BAD_REQUEST, '"password" is required');
    case (displayName.length < 8): throw new AppErr(StatusCodes.BAD_REQUEST, '"displayName" length must be at least 8 characters long');
    case (password.length < 6): throw new AppErr(StatusCodes.BAD_REQUEST, '"password" length must be 6 characters long');
    case (!validateEmail(email)): throw new AppErr(StatusCodes.BAD_REQUEST, '"email" must be a valid email');
    default: break;
  }
};
