def roll_dice(roll):
    if roll == 1:
        adventure.add_image_to_text_log(assets.image("""one"""))
    elif roll == 2:
        adventure.add_image_to_text_log(assets.image("""two"""))
    elif roll == 3:
        adventure.add_image_to_text_log(assets.image("""three"""))
    elif roll == 4:
        adventure.add_image_to_text_log(assets.image("""four"""))
    elif roll == 5:
        adventure.add_image_to_text_log(assets.image("""five"""))
    else:
        adventure.add_image_to_text_log(assets.image("""six"""))

info.player1.set_score(0)
info.player2.set_score(0)
info.player3.set_score(0)
info.player4.set_score(0)
player_roll = 0
player_current_round = 0

while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
    player_roll = randint(1,6)
    roll_dice(player_roll)
    if player_roll == 1:
        player_current_round = 0
    else:
        player_current_round = player_current_round + player_roll
info.player1.change_score_by(player_current_round)
player_roll = 0
while info.player2.score() < 100 and not player_roll == 1 and game.ask("Player 2", "Do you want to roll?"):
    player_roll = randint(1,6)
    roll_dice(player_roll)
    if player_roll == 1:
        player_current_round = 0
    else:
        player_current_round = player_current_round + player_roll
info.player2.change_score_by(player_current_round)
player_roll = 0
while info.player3.score() < 100 and not player_roll == 1 and game.ask("Player 3", "Do you want to roll?"):
    player_roll = randint(1,6)
    roll_dice(player_roll)
    if player_roll == 1:
        player_current_round = 0
    else:
        player_current_round = player_current_round + player_roll
info.player3.change_score_by(player_current_round)
player_roll = 0
while info.player4.score() < 100 and not player_roll == 1 and game.ask("Player 4", "Do you want to roll?"):
    player_roll = randint(1,6)
    roll_dice(player_roll)
    if player_roll == 1:
        player_current_round = 0
    else:
        player_current_round = player_current_round + player_roll
info.player4.change_score_by(player_current_round)
player_roll = 0
if info.player1.score() >= 100:
    adventure.add_to_textlog("Player 1 Wins!")
elif info.player2.score() >= 100:
    adventure.add_to_textlog("Player 2 Wins!")
elif info.player3.score() >= 100:
    adventure.add_to_textlog("Player 3 Wins!")
else:
    adventure.add_to_textlog("Player 3 Wins!")