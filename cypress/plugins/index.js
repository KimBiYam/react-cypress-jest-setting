const codeCoveragePlugin = require("@cypress/code-coverage/task");
const path = require("path");
const dotenv = require("dotenv");

module.exports = (on, config) => {
  codeCoveragePlugin(on, config);
  const configWithDotenv = dotenv.config({
    path: path.resolve(process.cwd(), ".env.test"),
  });

  const env = { ...config.env, ...configWithDotenv.parsed };
  const result = { ...config, env };

  return result;
};
