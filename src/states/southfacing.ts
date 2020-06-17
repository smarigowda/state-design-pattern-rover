import { Facing } from "./facing.interface";
import Rover from "../rover";

export default class SouthFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    console.log("no change in facing, increment x by 1");
  }
  moveBackwards() {
    console.log("no change in facing, decrement x by 1");
  }
  moveLeft() {
    console.log("change facing to North, no change in coordiantes");
  }
  moveRight() {
    console.log("chang facing to East, no change in coordiates");
  }
}
