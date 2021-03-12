const {
  loginValidation,
  signUpValidation,
  changePasswordValidation,
  forgotPasswordValidation,
} = require("./userValidationSchema");
const { ValidationError } = require("apollo-server-express");

class userValidation {
  async addUserValidation(data) {
    try {
      await signUpValidation.validate(data);
    } catch (e) {
      throw new ValidationError(e.message);
    }
  }
  async loginUserValidation(data) {
    try {
      await loginValidation.validate(data);
    } catch (e) {
      throw new ValidationError(e.message);
    }
  }

  async changePasswordValidation(data) {
    try {
      await changePasswordValidation.validate(data);
    } catch (e) {
      throw new ValidationError(e.message);
    }
  }
  async forgotPasswordValidation(data) {
    try {
      await forgotPasswordValidation.validate(data);
    } catch (e) {
      throw new ValidationError(e.message);
    }
  }
}

module.exports = userValidation;
