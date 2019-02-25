module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "plugin:prettier/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    code: 100,
    ignoreComments: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
