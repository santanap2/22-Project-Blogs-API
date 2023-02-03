const { emailSchema, displayNameSchema, passwordSchema } = require('./schema');

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  if (error) return { type: 'INVALID_EMAIL', message: '"email" must be a valid email' };
  return null;
};

const validateName = (name) => {
  const { error } = displayNameSchema.validate(name);
  if (error) {
    return { 
      type: 'INVALID_NAME',
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  return null;
};

const validatePassword = (password) => {
  const { error } = passwordSchema.validate(password);
  if (error) {
    return { 
      type: 'INVALID_PASSWORD',
      message: '"password" length must be at least 6 characters long',
    };
  }
  return null;
};

const validateAll = (email, name, password) => {
  const validatedEmail = validateEmail(email);
  if (validatedEmail) return validatedEmail.message;

  const validatedName = validateName(name);
  if (validatedName) return validatedName.message;

  const validatedPassword = validatePassword(password);
  if (validatedPassword) return validatedPassword.message;

  return null;
};

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
  validateAll,
};
