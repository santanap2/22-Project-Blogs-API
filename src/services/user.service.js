const { User } = require('../models');
const generateToken = require('../jwt/jsonWebToken');
const { validateAll } = require('./validations/validateValues');

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;

  const alreadyRegistered = await User.findOne({ where: { email } });
  if (alreadyRegistered) return { type: 'ALREADY_REGISTERED', message: 'User already registered' };

  const invalidField = validateAll(email, displayName, password);
  if (invalidField) return { type: 'INVALID_FIELD', message: invalidField };

  const createdUser = await User.create({ displayName, email, password, image });
  if (createdUser) {
    const token = generateToken({ email, displayName, password });
    return { type: null, message: token };
  }
  return { type: 'UNEXPECTED_ERROR', message: 'Some unexpected error ocurred' };
};

module.exports = {
  createUser,
};
