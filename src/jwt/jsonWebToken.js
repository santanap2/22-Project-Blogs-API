const jwt = require('jsonwebtoken');

const generateToken = (object) => {
  const token = jwt.sign(
    object,
    process.env.JWT_SECRET,
    { algorithm: 'HS256' },
  );

  return token;
};

module.exports = generateToken;
