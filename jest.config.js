module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  clearMocks: true,

  roots: ['<rootDir>/'],

  testMatch: ['**/variant4.test.js'],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  collectCoverageFrom: [
    './libs/**/variant4.js',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/coverage/**',
  ],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/',
  ],

  coverageReporters: ['text', 'lcov'],
};