import { Facing } from "./facing.interface";
import Rover from "../rover";
import SouthFacing from "./southfacing";
import NorthFacing from "./northfacing";

export default class EastFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    this.rover.incrementXCoordinate();
  }
  moveBackwards() {
    this.rover.decrementXCoordinate();
  }
  moveLeft() {
    this.rover.setFacing(new NorthFacing(this.rover));
  }
  moveRight() {
    this.rover.setFacing(new SouthFacing(this.rover));
  }
}
