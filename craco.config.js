module.exports = ({ env }) => {
  const isEnvE2e = env === "e2e";

  return {
    ...(isEnvE2e && {
      babel: {
        plugins: ["istanbul"],
      },
    }),
    jest: {
      configure: {
        collectCoverageFrom: ["src/**/*.{ts,tsx}"],
        coverageDirectory: "jest-coverage",
      },
    },
  };
};
