const path = require("path");
const dotenv = require("dotenv");

module.exports = (on, config) => {
  const configWithDotenv = dotenv.config({
    // .env.test 파일의 환경 변수 load
    path: path.resolve(process.cwd(), ".env.test"),
  });

  // cypress.json 파일에서 주입 가능한 환경 변수와 .env.test 파일의 환경 변수를 합침
  const env = { ...config.env, ...configWithDotenv.parsed };
  const result = { ...config, env };

  return result;
};
