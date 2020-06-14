import Hello from "../src/hello";
import DVD from "../src/dvd";

let hello;
let dvd;

describe("Scenario...", function () {
  before("Before block", function () {
    hello = new Hello();
    // dvd = new DVD({ name: "hello", releaseYear: 1987, director: "myself" });
    // let dvd2 = new DVD();
    dvd = new DVD({
      name: "Hello welcome to my world",
      releaseYear: 1920,
      director: "Santosh Marigowda",
    });
  });
  it("Test Case", function () {
    hello.sayHello();
  });
});
