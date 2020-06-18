import { Facing } from "./facing.interface";
import Rover from "../rover";
import NorthFacing from "./northfacing";
import SouthFacing from "./southfacing";

export default class WestFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    this.rover.decrementXCoordinate();
  }
  moveBackwards() {
    this.rover.incrementXCoordinate();
  }
  moveLeft() {
    this.rover.setFacing(new SouthFacing(this.rover));
  }
  moveRight() {
    this.rover.setFacing(new NorthFacing(this.rover));
  }
}
