import { Facing } from "./facing.interface";
import Rover from "./rover";

export default class NorthFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    console.log("no change in facing");
  }
  moveBackwards() {
    console.log("no change in facing");
  }
  moveLeft() {
    console.log("change facing to West, no change in coordiantes");
  }
  moveRight() {
    console.log("chang facing to East, no change in coordiates");
  }
}
