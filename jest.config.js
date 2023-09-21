/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  roots: [
    '<rootDir>',
  ],
  resetMocks: true,
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      babel: true,
      tsconfig: 'tsconfig.json',
    }]
  },
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'tests/**/*.ts',
    'src/**/*.ts',
    '!src/functions/**/handler.ts',
    '!src/functions/**/index.ts',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
