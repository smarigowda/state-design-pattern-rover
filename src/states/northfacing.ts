import { Facing } from "./facing.interface";
import Rover from "../rover";
import WestFacing from "./westfacing";

export default class NorthFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    console.log("no change in facing, increment y by 1");
    this.rover.setYCoordinate(this.rover.getYCoordinate() + 1)
  }
  moveBackwards() {
    console.log("no change in facing, decrement y by 1");
  }
  moveLeft() {
    console.log("change facing to West, no change in coordiantes");
    this.rover.setFacing(new WestFacing(this.rover));
  }
  moveRight() {
    console.log("chang facing to East, no change in coordiates");
  }
}
