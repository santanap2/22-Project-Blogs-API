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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
