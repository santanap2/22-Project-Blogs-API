const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type === 'ALREADY_REGISTERED') return res.status(409).json({ message });

  if (type) return res.status(400).json({ message });

  return res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const result = await userService.getUsers();
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  getUsers,
};
