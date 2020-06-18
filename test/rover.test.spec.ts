import * as chai from "chai";
import Rover from "../src/rover";
import NorthFacing from "../src/states/northfacing";
import SouthFacing from "../src/states/southfacing";
import WestFacing from "../src/states/westfacing";
import EastFacing from "../src/states/eastfacing";

const assert = chai.assert; //?

let rover;

describe("Rover Test Scenario", function () {
  before("initialize rover", function () {});
  it("Test 1: Move Left", function () {
    rover = new Rover(0, 0);
    const nothFacing = new NorthFacing(rover);
    rover.setFacing(nothFacing);
    rover.move(["l"]);
    assert.isTrue(rover.currentFacing instanceof WestFacing);
    rover.move(["l"]);
    assert.isTrue(rover.currentFacing instanceof SouthFacing);
    rover.move(["l"]);
    assert.isTrue(rover.currentFacing instanceof EastFacing);
    rover.move(["l"]);
    assert.isTrue(rover.currentFacing instanceof NorthFacing);
    assert.equal(rover.getXCoordinate(), 0);
    assert.equal(rover.getYCoordinate(), 0);
  });
  it("Test 2: Move Right", function () {
    rover = new Rover(0, 0);
    const nothFacing = new NorthFacing(rover);
    rover.setFacing(nothFacing);
    rover.move(["r"]);
    assert.isTrue(rover.currentFacing instanceof EastFacing);
    rover.move(["r"]);
    assert.isTrue(rover.currentFacing instanceof SouthFacing);
    rover.move(["r"]);
    assert.isTrue(rover.currentFacing instanceof WestFacing);
    rover.move(["r"]);
    assert.isTrue(rover.currentFacing instanceof NorthFacing);
    assert.equal(rover.getXCoordinate(), 0);
    assert.equal(rover.getYCoordinate(), 0);
  });
});
