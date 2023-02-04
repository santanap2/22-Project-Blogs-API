const { User } = require('../models');
const { generateToken } = require('../jwt/jsonWebToken');

const loginRequest = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!email || !password) {
    return { type: 'MISSING_FIELDS', message: 'Some required fields are missing' };
  } 

  if (!user) return { type: 'INVALID_FIELDS', message: 'Invalid fields' };

  const token = generateToken({ email: user.email, password: user.password });
  return { type: null, message: token };
};

module.exports = {
  loginRequest,
};
