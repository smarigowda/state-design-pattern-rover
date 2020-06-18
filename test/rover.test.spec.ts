import * as chai from "chai";
import Rover from "../src/rover";
import NorthFacing from "../src/states/northfacing";
import SouthFacing from "../src/states/southfacing";
import WestFacing from "../src/states/westfacing";
import EastFacing from "../src/states/eastfacing";

const assert = chai.assert;
let rover;

describe("Rover Test Scenario", function () {
  before("initialize rover", function () {});
  it("Test 1: Move Left 360 degrees", function () {
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
  it("Test 2: Move Right 360 degrees", function () {
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
  it("Test 3: North -> Forward -> Backwards", function () {
    rover = new Rover(0, 0);
    const facing = new NorthFacing(rover);
    rover.setFacing(facing);
    rover.move(["f", "f", "f", "f"]);
    assert.isTrue(rover.currentFacing instanceof NorthFacing);
    assert.equal(rover.getYCoordinate(), 4);
    rover.move(["b", "b", "b", "b", "b"]);
    assert.equal(rover.getYCoordinate(), -1);
    assert.equal(rover.getXCoordinate(), 0);
    assert.isTrue(rover.currentFacing instanceof NorthFacing);
  });
  it("Test 4: South -> Forward -> Backwards", function () {
    rover = new Rover(0, 0);
    const facing = new SouthFacing(rover);
    rover.setFacing(facing);
    rover.move(["f", "f", "f", "f"]);
    assert.isTrue(rover.currentFacing instanceof SouthFacing);
    assert.equal(rover.getYCoordinate(), -4);
    rover.move(["b", "b", "b", "b", "b"]);
    assert.equal(rover.getYCoordinate(), 1);
    assert.equal(rover.getXCoordinate(), 0);
    assert.isTrue(rover.currentFacing instanceof SouthFacing);
  });
  it("Test 4: East -> Forward -> Backwards", function () {
    rover = new Rover(0, 0);
    const facing = new EastFacing(rover);
    rover.setFacing(facing);
    rover.move(["f", "f", "f", "f"]);
    assert.isTrue(rover.currentFacing instanceof EastFacing);
    assert.equal(rover.getXCoordinate(), 4);
    rover.move(["b", "b", "b", "b", "b"]);
    assert.equal(rover.getXCoordinate(), -1);
    assert.equal(rover.getYCoordinate(), 0);
    assert.isTrue(rover.currentFacing instanceof EastFacing);
  });
  it("Test 4: West -> Forward -> Backwards", function () {
    rover = new Rover(0, 0);
    const facing = new WestFacing(rover);
    rover.setFacing(facing);
    rover.move(["f", "f", "f", "f"]);
    assert.isTrue(rover.currentFacing instanceof WestFacing);
    assert.equal(rover.getXCoordinate(), -4);
    rover.move(["b", "b", "b", "b", "b"]);
    assert.equal(rover.getXCoordinate(), 1);
    assert.equal(rover.getYCoordinate(), 0);
    assert.isTrue(rover.currentFacing instanceof WestFacing);
  });
});
