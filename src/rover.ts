export default class Rover {
    x: number;
    y: number;
    facing: string;
    constructor(x: number, y: number, facing: string) {
        this.x = x;
        this.y = y;
        this.facing = facing;
    }
    move(commands: string[]) {
        commands.forEach(command => {
            console.log(command);
            switch(command) {
                case 'l':
                    this.moveLeft();
                    break;
                case 'f':
                    this.moveForward();
                    break;
            }
        })
    }
    moveForward() {
        switch(this.facing) {
            case 'N':
                this.y++;
                break;
            case 'S':
                this.y--;
                break;
            case 'E':
                this.x++;
                break;
            case 'W':
                this.x--;
                break;
        }

        
    }
    moveBackwards() {

    }
    moveLeft() {
        switch(this.facing) {
            case 'N':
                this.facing = 'W';
                break;
            case 'S':
                this.facing = 'E';
                break;
            case 'E':
                this.facing = 'N';
                break;
            case 'W':
                this.facing = 'S'
                break;
        }
    }
    moveRight() {

    }

}