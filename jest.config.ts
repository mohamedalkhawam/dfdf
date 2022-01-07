import type { Config } from "@jest/types";
const config = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "/^.+.(css|less|scss|sass)$/": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "/^.+.(css|less|scss|sass)$/": "identity-obj-proxy",
  },
  moduleTypes: { "jest.config.ts": "cjs" },
};
export default config;
