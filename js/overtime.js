let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1044;
canvas.height = 600;


const player = new Player({ posistion: { x: 400, y: 400 }, width: 100 });

const interactablePlatforms_bottom = [
    new Object({ posistion: { x: 300, y: 400 }, width: 50, height: 20, connectiongroup: 1 }),
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

const keybinds = {
    w: false,
    a: false,
    d: false,
    e: false,
}

function checkkeydown() {
    if (keybinds.w) {
        player.posistion.y -= player.jumpvalue;
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

function draw() {
    player.draw();
    for (i = interactablePlatforms_bottom.length; i > 0; i--) {
        interactablePlatforms_bottom[i - 1].draw();
    }
}

function repeaties() {
    requestAnimationFrame(repeaties);
    for (i = interactablePlatforms_bottom.length; i > 0; i--) {
        // if (collisionCheck(player, interactablePlatforms_bottom[i - 1])) {
        // }
    }
    canvascollision(player, canvas);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    checkkeydown();
    draw();
    thecollision(player, interactablePlatforms_bottom[0]);
}

repeaties();


