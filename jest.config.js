/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  testMatch: ['**/src/**/*.test.ts', '**/src/**/*.test.tsx'],
  resolver: 'jest-ts-webcompat-resolver',
};
