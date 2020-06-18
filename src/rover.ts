import { Facing } from "./states/facing.interface";

export default class Rover {
  private currentFacing: Facing;
  private xCoordinate: number = 0;
  private yCoordinate: number = 0;

  constructor(xCoordinate: number, yCoordinate: number) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }
  setFacing(newFacing: Facing) {
    this.currentFacing = newFacing;
  }
  incrementXCoordinate() {
    this.xCoordinate++;
  }
  incrementYCoordinate() {
    this.yCoordinate++;
  }
  decrementXCoordinate() {
    this.xCoordinate--;
  }
  decrementYCoordinate() {
    this.yCoordinate--;
  }
  getXCoordinate() {
    return this.xCoordinate;
  }
  getYCoordinate() {
    return this.yCoordinate;
  }
  move(commands: string[]) {
    commands.forEach((command) => {
      switch (command) {
        case "l":
          this.currentFacing.moveLeft();
          break;
        case "r":
          this.currentFacing.moveRight();
          break;
        case "f":
          this.currentFacing.moveForward();
          break;
        case "b":
          this.currentFacing.moveBackwards();
      }
    });
  }
}
