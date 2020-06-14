module.exports = function (wallaby) {
  return {
    files: ["src/*.ts"],

    tests: ["test/*.spec.ts"],

    env: {
      type: "node",
    },

    // or any other supported testing framework:
    // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
    testFramework: "mocha",
  };
};
