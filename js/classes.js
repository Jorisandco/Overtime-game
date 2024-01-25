// classes

// player class
class Player {
    constructor({ posistion, width, connectiongroup }) {
        this.posistion = posistion;

        this.speed = 5;
        this.health = 100;
        this.attack = 10;
        this.width = width;
        this.height = width;
        this.bottom = this.posistion.y + this.height;
        this.left = this.posistion.x - this.width;
        this.right = this.posistion.x + this.width;
        this.gravity = 0.2;
        this.jumpvalue = 20;
        this.isonground = false;
        this.overlappinggroup = 0;
    };

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.posistion.x, this.posistion.y, this.width, this.height);
    }
    update() {
        if (!this.isonground) {
            player.posistion.y += this.gravity;
            if (this.gravity < 25) {
                this.gravity += 0.5;
            }
        }
        if (this.isonground) {
            this.gravity = 1;
            this.speed = 8.5;
        }
        else if (!this.isonground) {
            this.speed = 10;
        }
    }
}

// object and actor classes 
class Object {
    constructor({ posistion, width, height, connectiongroup }) {
        this.posistion = posistion;
        this.width = width;
        this.height = height;
        this.bottom = this.posistion.y + this.height;
        this.left = this.posistion.x - this.width;
        this.right = this.posistion.x + this.width;
        this.color = "blue";
        this.caninteract = false;
        this.turned = false;
        this.connectiongroup = connectiongroup;
    };

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posistion.x, this.posistion.y, this.width, this.height);
    }

    update() {
        draw();
    }
}

