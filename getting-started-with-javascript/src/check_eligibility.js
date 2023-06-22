/*

The checkEligibility() function should accept age as input and check for eligibility to vote

The validity criteria for age is 18 and above.

The function should return true if eligibility criteria is satisfied else should retun false.

The function should return error message "Invalid Age Input, Age Should Only Be Number !!", 
for any non-numeric value passed to the function.

*/
const check_eligibility = (age) => {
  if (typeof age !== 'number' || !Number.isInteger(age)) {
    return "Invalid Age Input, Age Should Only Be Number !!";
  }

  return age >= 18;
};

module.exports = check_eligibility;

