function roll_dice(roll: number) {
    if (roll == 1) {
        adventure.addImageToTextLog(assets.image`one`)
    } else if (roll == 2) {
        adventure.addImageToTextLog(assets.image`two`)
    } else if (roll == 3) {
        adventure.addImageToTextLog(assets.image`three`)
    } else if (roll == 4) {
        adventure.addImageToTextLog(assets.image`four`)
    } else if (roll == 5) {
        adventure.addImageToTextLog(assets.image`five`)
    } else {
        adventure.addImageToTextLog(assets.image`six`)
    }
    
}

info.player1.setScore(0)
info.player2.setScore(0)
info.player3.setScore(0)
info.player4.setScore(0)
let player_roll = 0
let player_current_round = 0
while (info.player1.score() < 100 && !(player_roll == 1) && game.ask("Player 1", "Do you want to roll?")) {
    player_roll = randint(1, 6)
    roll_dice(player_roll)
    if (player_roll == 1) {
        player_current_round = 0
    } else {
        player_current_round = player_current_round + player_roll
    }
    
}
info.player1.changeScoreBy(player_current_round)
player_roll = 0
while (info.player2.score() < 100 && !(player_roll == 1) && game.ask("Player 2", "Do you want to roll?")) {
    player_roll = randint(1, 6)
    roll_dice(player_roll)
    if (player_roll == 1) {
        player_current_round = 0
    } else {
        player_current_round = player_current_round + player_roll
    }
    
}
info.player2.changeScoreBy(player_current_round)
player_roll = 0
while (info.player3.score() < 100 && !(player_roll == 1) && game.ask("Player 3", "Do you want to roll?")) {
    player_roll = randint(1, 6)
    roll_dice(player_roll)
    if (player_roll == 1) {
        player_current_round = 0
    } else {
        player_current_round = player_current_round + player_roll
    }
    
}
info.player3.changeScoreBy(player_current_round)
player_roll = 0
while (info.player4.score() < 100 && !(player_roll == 1) && game.ask("Player 4", "Do you want to roll?")) {
    player_roll = randint(1, 6)
    roll_dice(player_roll)
    if (player_roll == 1) {
        player_current_round = 0
    } else {
        player_current_round = player_current_round + player_roll
    }
    
}
info.player4.changeScoreBy(player_current_round)
player_roll = 0
if (info.player1.score() >= 100) {
    adventure.addToTextlog("Player 1 Wins!")
} else if (info.player2.score() >= 100) {
    adventure.addToTextlog("Player 2 Wins!")
} else if (info.player3.score() >= 100) {
    adventure.addToTextlog("Player 3 Wins!")
} else {
    adventure.addToTextlog("Player 3 Wins!")
}

