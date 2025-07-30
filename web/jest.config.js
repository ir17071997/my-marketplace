module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/web'],
  setupFilesAfterEnv: ['<rootDir>/web/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};