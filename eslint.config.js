module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["node_modules/", "dist/"], // Ignorar apenas o necessário
  rules: {
    // Suas regras personalizadas
  },
};
