import { Facing } from "./facing.interface";
import Rover from "../rover";
import WestFacing from "./westfacing";
import EastFacing from "./eastfacing";

export default class NorthFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    this.rover.incrementYCoordinate()
  }
  moveBackwards() {
    this.rover.decrementYCoordinate();
  }
  moveLeft() {
    this.rover.setFacing(new WestFacing(this.rover));
  }
  moveRight() {
    this.rover.setFacing(new EastFacing(this.rover));
  }
}
