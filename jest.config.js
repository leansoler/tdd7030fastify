module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  roots: ['<rootDir>/tests'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
