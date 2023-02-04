const { authToken } = require('../jwt/jsonWebToken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const { type, message } = authToken(authorization);
  if (type) return res.status(401).json({ message });

  next();
};

module.exports = {
  validateToken,
};
