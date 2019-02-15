const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateActivityInput(data) {
  let errors = {};

  // Convert empty fields to empty strings so validator functions can be used
  data.name = !isEmpty(data.name) ? data.name : "";

  // Check for name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Have you done nothing? Enter something!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
