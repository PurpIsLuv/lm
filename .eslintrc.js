// const production = process.env.production;

module.exports = {
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "warn",
    "no-var": "error",
    "prefer-const": "error"
  }

  // noInlineConfig: production ? "error" : "warn",
};
