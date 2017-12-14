var nonPositiveValidationRule = require('./rules/nonPositive'),
	makeNonDivisibleValidationRule = require('./rules/nonDivisible'),
	validationRules = [
		nonPositiveValidationRule,
		makeNonDivisibleValidationRule(3, 'error.three'),
		makeNonDivisibleValidationRule(5, 'error.five')
	];
module.exports = function (n) {
	return validationRules.reduce(function(result, rule) {
		rule(n, result);
		return result;
	}, []);
};