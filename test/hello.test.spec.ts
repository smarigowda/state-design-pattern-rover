import Hello from "../src/hello";

let hello;

describe("Scenario...", function () {
  before("Before block", function () {
    hello = new Hello();
  });
  it("Test Case", function () {
    hello.sayHello();
  });
});
