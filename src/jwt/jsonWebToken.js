const jwt = require('jsonwebtoken');

const generateToken = (object) => {
  const token = jwt.sign(
    object,
    process.env.JWT_SECRET,
    { algorithm: 'HS256' },
  );

  return token;
};

const authToken = (token) => {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return verified;
  } catch (error) {
    return { type: 'AUTH_FAILED', message: 'Expired or invalid token' };
  }
};

module.exports = {
  generateToken,
  authToken,
};
