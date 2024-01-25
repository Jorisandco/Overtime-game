// variables
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1044;
canvas.height = 600;

// player variable
const player = new Player({ posistion: { x: 400, y: 400 }, width: 100 });

// list of interactable platforms
const interactablePlatforms_bottom = [
    new Object({ posistion: { x: 300, y: 400 }, width: 75, height: 20, connectiongroup: 1 }),
    new Object({ posistion: { x: 450, y: 400 }, width: 50, height: 20, connectiongroup: 1 }),
    new Object({ posistion: { x: 700, y: 400 }, width: 50, height: 20, connectiongroup: 1 }),
    new Object({ posistion: { x: 850, y: 400 }, width: 50, height: 20, connectiongroup: 1 }),
    new Object({ posistion: { x: 1000, y: 400 }, width: 50, height: 20, connectiongroup: 1 }),
    new Object({ posistion: { x: 300, y: 200 }, width: 50, height: 20, connectiongroup: 2 }),
    new Object({ posistion: { x: 450, y: 200 }, width: 50, height: 20, connectiongroup: 2 }),
    new Object({ posistion: { x: 700, y: 200 }, width: 50, height: 20, connectiongroup: 2 }),
    new Object({ posistion: { x: 850, y: 200 }, width: 50, height: 20, connectiongroup: 2 }),
    new Object({ posistion: { x: 1000, y: 200 }, width: 50, height: 20, connectiongroup: 2 }),
];

// control keys
addEventListener("keydown", () => {
    switch (event.key) {
        case "w":
            keybinds.w = true;
            break;
        case "a":
            keybinds.a = true;
            break;
        case "d":
            keybinds.d = true;
            break;
        case "e":
// interaction script platforms
            for (i = interactablePlatforms_bottom.length; i > 0; i--) {
                if (interactablePlatforms_bottom[i - 1].caninteract) {
                    interactablePlatforms_bottom[i - 1].caninteract = false;
                    for (i = interactablePlatforms_bottom.length; i > 0; i--) {
                        if (interactablePlatforms_bottom[i - 1].connectiongroup == player.overlappinggroup) {
                            interactablePlatforms_bottom[i - 1].color = "violet";
                            interactablePlatforms_bottom[i - 1].turned = true;
                        }
                    }
                }
            }
            break;
    }
});

// keyup
addEventListener("keyup", () => {
    switch (event.key) {
        case "w":
            keybinds.w = false;
            break;
        case "a":
            keybinds.a = false;
            break;
        case "d":
            keybinds.d = false;
            break;
    }
});

// keychecks
const keybinds = {
    w: false,
    a: false,
    d: false,
    e: false,
}

let jumphold = 0
// key action function
function checkkeydown() {
    if (keybinds.w) {
        if(jumphold < 10){
        player.posistion.y -= player.jumpvalue;
        jumphold += 1;
        }
    }
    if (keybinds.a) {
        player.posistion.x -= player.speed;
    }
    if (keybinds.d) {
        player.posistion.x += player.speed;
    }
    if (keybinds.e) {
        alert("nothing yet");
    }
}
// draw function
function draw() {
    player.draw();
    for (i = interactablePlatforms_bottom.length; i > 0; i--) {
        interactablePlatforms_bottom[i - 1].draw();
    }
}

// animation function
function repeaties() {
    requestAnimationFrame(repeaties);

    canvascollision(player, canvas);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    checkkeydown();
    draw();

    thecollision(player, interactablePlatforms_bottom[0]);
}

repeaties();