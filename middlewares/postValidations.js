const comebackResponse = require('../util/comebackResponse');
const messages = require('../util/returnedMessages');
const { BlogPost } = require('../models');

const validateTitleAndContent = (req, res, next) => {
  const { title, content } = req.body;

  if (!title) return comebackResponse(res, 400, messages.requiredTitle);
  if (!content) return comebackResponse(res, 400, messages.requiredContent);
  return next();
};

const validateSameUser = async (req, res, next) => {
  const { params: { id }, validUser } = req;
  const [{ userId }] = await BlogPost.findAll({ where: { id } });

  if (userId !== validUser.id) return comebackResponse(res, 401, messages.notAuthorizedUser);
  return next();
};

module.exports = {
  validateTitleAndContent,
  validateSameUser,
};
