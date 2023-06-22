/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/
const password_validation = (password) => {
  // Check if password contains an uppercase alphabet
  const hasUppercase = /[A-Z]/.test(password);

  // Check if password contains a lowercase alphabet
  const hasLowercase = /[a-z]/.test(password);

  // Check if password contains a digit
  const hasDigit = /\d/.test(password);

  // Check if password contains a symbolic character
  const hasSymbol = /[!@#$%^&*()]/.test(password);

  // Check if password has at least 6 characters and at most 20 characters
  const isValidLength = password.length >= 6 && password.length <= 20;

  return (
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSymbol &&
    isValidLength
  );
};

module.exports = password_validation;
