function checkCollision(player, interactablePlatforms_bottom) {
    if (player.posistion.x < interactablePlatforms_bottom.posistion.x + interactablePlatforms_bottom.width &&
        player.posistion.x + player.width > interactablePlatforms_bottom.posistion.x &&
        player.posistion.y < interactablePlatforms_bottom.posistion.y + interactablePlatforms_bottom.height &&
        player.posistion.y + player.height > interactablePlatforms_bottom.posistion.y) {
        return true;
    }
    else {
        return false;
    }
}

function canvascollision(player, canvas) {
    if (player.posistion.x < 0) {
        player.posistion.x = 0;
    }
    if (player.posistion.x + player.playerwith > canvas.width) {
        player.posistion.x = canvas.width - player.playerwith;
    }
    if (player.posistion.y < 0) {
        player.posistion.y = 0;
    }
    if (player.posistion.y + player.width > canvas.height) {
        player.isonground = true;
    }
    else if (player.posistion.y + player.width < canvas.height) {
        player.isonground = false;
    }
}

function thecollision() {
    for (i = interactablePlatforms_bottom.length; i > 0; i--) {
        if (!interactablePlatforms_bottom[i - 1].turned) {
            if (checkCollision(player, interactablePlatforms_bottom[i - 1])) {
                interactablePlatforms_bottom[i - 1].color = "lime";
                interactablePlatforms_bottom[i - 1].caninteract = true;
                player.overlappinggroup = interactablePlatforms_bottom[i - 1].connectiongroup;
            }
            else if (!checkCollision(player, interactablePlatforms_bottom[i - 1])) {
                interactablePlatforms_bottom[i - 1].color = "lightblue";
                interactablePlatforms_bottom[i - 1].caninteract = false;
            };
        }
        else if (interactablePlatforms_bottom[i - 1].turned) {
            if (checkCollision(player, interactablePlatforms_bottom[i - 1])) {
                player.posistion.y = interactablePlatforms_bottom[i - 1].posistion.y + interactablePlatforms_bottom[i - 1].height;
                player.isonground = true;
            }
            else if (!checkCollision(player, interactablePlatforms_bottom[i - 1])) {
                
            };
        }
    }
}