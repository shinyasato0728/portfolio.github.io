module.exports = {
  extends: "stylelint-config-primer",
  "plugins": [
    "stylelint-selector-bem-pattern"
  ],
  rules: {
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    },
    "indentation": 2,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "block-opening-brace-newline-after": "never-multi-line",
    "color-hex-length": "long"
  }
}
