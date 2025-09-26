/** @type {import('jest').Config} */
const config = {
  // Ignora os arquivos de teste de UI (Playwright) ao rodar os testes de API.
  testPathIgnorePatterns: ["/node_modules/", ".ui.spec.js"],
};

module.exports = config;