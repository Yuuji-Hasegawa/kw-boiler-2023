module.exports = {
	extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
	rules: {
		indentation: "space",
		"keyframes-name-pattern": null,
		"scss/at-function-pattern": null,
		"scss/at-mixin-pattern": null,
		"scss/dollar-variable-pattern": null,
		"scss/percent-placeholder-pattern": null,
		"scss/selector-no-union-class-name": true,
		"selector-class-pattern": null,
		"selector-id-pattern": null,
	},
	ignoreFiles: ["**/node_modules/**", "./dist/**"],
};
