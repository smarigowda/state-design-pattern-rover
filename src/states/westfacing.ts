import { Facing } from "./facing.interface";
import Rover from "../rover";

export default class WestFacing implements Facing {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  moveForward() {
    console.log("no change in facing, decrement x by 1");
  }
  moveBackwards() {
    console.log("no change in facing, increment x by 1");
  }
  moveLeft() {
    console.log("South, no change in coordiantes");
  }
  moveRight() {
    console.log("North, no change in coordiates");
  }
}
