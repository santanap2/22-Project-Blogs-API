const { User } = require('../models');
const { generateToken } = require('../jwt/jsonWebToken');
const { validateAll } = require('./validations/validateValues');

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;

  const alreadyRegistered = await User.findOne({ where: { email } });
  if (alreadyRegistered) return { type: 'ALREADY_REGISTERED', message: 'User already registered' };

  const invalidField = validateAll(email, displayName, password);
  if (invalidField) return { type: 'INVALID_FIELD', message: invalidField };

  const createdUser = await User.create({ displayName, email, password, image });
  if (createdUser) {
    const { id } = await User.findOne({ where: { email, displayName, password } });
    const token = generateToken({ email, displayName, password, id });
    return { type: null, message: token };
  }
  return { type: 'UNEXPECTED_ERROR', message: 'Some unexpected error ocurred' };
};

const getUsers = async () => {
  const result = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return result;
};

const getUserById = async (id) => {
  const result = await User.findOne({ 
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (!result) return { type: 'NOT_FOUND', message: 'User does not exist' };
  return { type: null, message: result };
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
