import { Facing } from "./states/facing.interface";

export default class Rover {
  currentFacing: Facing;
  xCoordinate: number = 0;
  yCoordinate: number = 0;

  constructor(xCoordinate: number, yCoordinate: number) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }
  setFacing(newFacing: Facing) {
    this.currentFacing = newFacing;
  }
  setXCoordinate(xCoordinate: number) {
    this.xCoordinate = xCoordinate;
  }
  setYCoordinate(yCoordinate: number) {
    this.yCoordinate = yCoordinate;
  }
  getXCoordinate() {
    return this.xCoordinate;
  }
  getYCoordinate() {
    return this.yCoordinate;
  }
  move(commands: string[]) {
    commands.forEach((command) => {
      console.log(command);
      switch (command) {
        case "l":
          this.currentFacing.moveLeft();
          break;
        case "f":
          this.currentFacing.moveForward();
          break;
      }
    });
  }
  //   moveForward() {
  //     switch (this.facing) {
  //       case "N":
  //         this.y++;
  //         break;
  //       case "S":
  //         this.y--;
  //         break;
  //       case "E":
  //         this.x++;
  //         break;
  //       case "W":
  //         this.x--;
  //         break;
  //     }
  //   }
  //   moveBackwards() {}
  //   moveLeft() {
  //     switch (this.facing) {
  //       case "N":
  //         this.facing = "W";
  //         break;
  //       case "S":
  //         this.facing = "E";
  //         break;
  //       case "E":
  //         this.facing = "N";
  //         break;
  //       case "W":
  //         this.facing = "S";
  //         break;
  //     }
  //   }
  //   moveRight() {}
}
