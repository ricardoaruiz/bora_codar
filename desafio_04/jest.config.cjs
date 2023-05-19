module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*.test.(t|j)sx',
    '<rootDir>/src/**/*.test.(t|j)s',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
