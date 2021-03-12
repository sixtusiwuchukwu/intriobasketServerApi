const yup = require("yup");

const signUpValidation = yup.object().shape({
  password: yup.string().required("Password is required").min(5),
  phone: yup
    .number("Must be a valid mobile number")
    .required("phone number is required")
    .min(7),
  email: yup.string().email(),
});
const loginValidation = yup.object().shape({
  password: yup.string().required("Password is required").min(5),
  email: yup.string().required("Email is required").email(),
});

const changePasswordValidation = yup.object().shape({
  oldPassword: yup.string().required("Password is required").min(5),
  password: yup
    .number("Must be a valid mobile number")
    .required("phone number is required")
    .min(7),
});

const forgotPasswordValidation = yup.object().shape({
  email: yup.string().email(),
});

module.exports = {
  loginValidation,
  signUpValidation,
  changePasswordValidation,
  forgotPasswordValidation,
};
