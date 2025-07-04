// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Ajusta si usas un alias diferente
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // para ignorar imports de CSS
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
