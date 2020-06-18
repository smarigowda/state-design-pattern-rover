import { Facing } from "./facing.interface";
import Rover from "../rover";
import EastFacing from "./eastfacing";
import WestFacing from "./westfacing";

export default class SouthFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    this.rover.decrementYCoordinate();
  }
  moveBackwards() {
    this.rover.incrementYCoordinate();
  }
  moveLeft() {
    this.rover.setFacing(new EastFacing(this.rover));
  }
  moveRight() {
    this.rover.setFacing(new WestFacing(this.rover));
  }
}
