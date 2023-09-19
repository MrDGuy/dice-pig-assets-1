# Pig
## Make a function called roll_dice(roll)
Use the ``||functions:def do something||`` code and change ``||functions:def do something||`` to ``||functions:roll_dice||``

```python
  def roll_dice():
    pass
```

## Make a function called roll_dice(roll)
Inside the parentheses write roll

```python
  def roll_dice(roll):
    pass
```

## Make a function called roll_dice(roll)
Next, using ``||logic:if||``, ``||logic:elif||`` and ``||logic:else||`` display the different different images given each value for roll.

```python
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
```


## Start player scores at 0
Underneath the roll_dice function: Grab the ``||info:set player score to 0||`` code for each of the 4 players and change ``||info:player1||`` to ``||info:player2||``, ``||info:player3||``, and ``||info:player4||`` respectively

```python
  info.player1.set_score(0)
  info.player2.set_score(0)
  info.player3.set_score(0)
  info.player4.set_score(0)
```

## Have the player_roll and player_current_round initialized a 0
Create two variables ``||variables: player_roll||`` and ``||variables:player_current_round||`` and set them equal to 0.

```python
  info.player1.set_score(0)
  info.player2.set_score(0)
  info.player3.set_score(0)
  info.player4.set_score(0)
  player_roll = 0
  player_current_round = 0
```

## Player 1's while loop
From the ``||loops:loops||`` category grab a ``||loops:while||`` loop and put this under the player_current_round=0 code.

```python
  info.player1.set_score(0)
  info.player2.set_score(0)
  info.player3.set_score(0)
  info.player4.set_score(0)
  player_roll = 0
  player_current_round = 0
  
  while True:
      pass
```

## Player 1's while loop
From the ``||info:info||`` category grab a ``||info:player score||`` code and put this where the true was and put < 100 after it.

```python
  while info.player1.score() < 100:
      pass
```

## Player 1's while loop
After the player score < 100 write and not player_roll == 1
```python
  while info.player1.score() < 100 and not player_roll == 1:
      pass
```

## Player 1's while loop
From the ``||game:game||`` category grab the ``||game:ask title||`` code and ask if "Player 1","Do you want to roll?"
```python
  while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
      pass
```

## Player 1's while loop
Inside the while loop, set player_roll equal to the ``||math:math||`` category ``||math:randint||`` code and change the parameters to 1,6
```python
  while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
      player_roll = randint(1,6)
```

## Player 1's while loop
Call the ``||function:roll_dice(roll)||`` function with the player_roll value
```python
  while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
      player_roll = randint(1,6)
      roll_dice(player_roll)
```

## Player 1's while loop
Next, using ``||logic:if else||`` determine the player's current round score based on their roll or rolling a 1

```python
  while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
      player_roll = randint(1,6)
      roll_dice(player_roll)
      if player_roll == 1:
        player_current_round = 0
      else:
        player_current_round = player_current_round + player_roll
```

## Player 1's while loop
Next, outside the while loop grab the ``||info:change player score by 1||`` code and change the 1 to player_current_round

```python
  while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
      player_roll = randint(1,6)
      roll_dice(player_roll)
      if player_roll == 1:
        player_current_round = 0
      else:
        player_current_round = player_current_round + player_roll
  info.player1.change_score_by(player_current_round)
```

## Player 1's while loop
Reset the ``||variables:player_roll||`` to 0

```python
  while info.player1.score() < 100 and not player_roll == 1 and game.ask("Player 1", "Do you want to roll?"):
      player_roll = randint(1,6)
      roll_dice(player_roll)
      if player_roll == 1:
        player_current_round = 0
      else:
        player_current_round = player_current_round + player_roll
  info.player1.change_score_by(player_current_round)
  player_roll = 0
```

## Player 2's while loop
Underneath the player_roll = 0 copy and paste the code for player 2.  You only have to change info.player1 to info.player2 and in the game.ask "Player 1" to "Player 2"

```python
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
```

## Player 3's while loop
Do the same for player 3

```python
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
```

## Player 4's while loop
Do the same for player 4

```python
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
```

## Final score
Next, using ``||logic:if||``, ``||logic:elif||`` and ``||logic:else||`` and the ``||info: player score||`` determine the winner and print it out using the ``||adventure:add text to textlog||``

```python
  info.player4.change_score_by(player_current_round)
  player_roll = 0
  if info.player1.score() >= 100:
      adventure.add_to_textlog("Player 1 Wins!")
  elif info.player2.score() >= 100:
      adventure.add_to_textlog("Player 2 Wins!")
  elif info.player3.score() >= 100:
      adventure.add_to_textlog("Player 3 Wins!")
  else:
      adventure.add_to_textlog("Player 4 Wins!")
```

## Complete Code.
Click the hint to see the entire code.

```python
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
      adventure.add_to_textlog("Player 4 Wins!")
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQQABAAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3f3f3d3d3d3d/d/d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3Q==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"one\"\n    },\n    \"image2\": {\n        \"data\": \"hwQQABAAAAARERERERERERERERERERERERERERERERER8R8RERERERHxHxERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHxHxEREREREfEfEREREREREREREREREREREREREREREREREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"two\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAARERERERERERERERERERERERERERERERER8R8RERERERHxHxEREREREREREREREREREREREREREREREfEfERERERER8R8RERERERERERERERERERERERERERERERHxHxEREREREfEfEREREREREREREREREREREREREREREREREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"three\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAARERERERERERERERERERERERERERERERERERERERERERHxHxER8R8REfEfERHxHxERERERERERERERERERERERERERERERERERERERERERERHxHxER8R8REfEfERHxHxEREREREREREREREREREREREREREREREREREREREREREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"four\"\n    },\n    \"image5\": {\n        \"data\": \"hwQQABAAAAARERERERERERERERERERERERERERERERERERERERERERHxHxER8R8REfEfERHxHxEREREREREREREREfEfERERERER8R8RERERERERERERERHxHxER8R8REfEfERHxHxEREREREREREREREREREREREREREREREREREREREREREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"five\"\n    },\n    \"image6\": {\n        \"data\": \"hwQQABAAAAARERERERERERERERERERERERERERERERER8R/xH/EfERHxH/Ef8R8RERERERERERERERERERERERERERERERERERERERERERERERERERERERHxH/Ef8R8REfEf8R/xHxEREREREREREREREREREREREREREREREREREREREREREQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"six\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"one\":return img`\nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d f f d d d d d d d \nd d d d d d d f f d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \nd d d d d d d d d d d d d d d d \n`;\n            case \"image2\":\n            case \"two\":return img`\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n`;\n            case \"image3\":\n            case \"three\":return img`\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n`;\n            case \"image4\":\n            case \"four\":return img`\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n`;\n            case \"image5\":\n            case \"five\":return img`\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 f f 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n`;\n            case \"image6\":\n            case \"six\":return img`\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 \n1 1 1 f f 1 1 1 1 1 f f 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"function_definition\" x=\"0\" y=\"0\"><mutation name=\"roll_dice\" functionid=\".T_`S%)eSmb=jY8Zq^2E\"></mutation><field name=\"function_name\">roll_dice</field><statement name=\"STACK\"><block type=\"typescript_statement\" editable=\"false\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" line0=\"playingCards.createPokerDeck()\" numlines=\"1\"></mutation></block></statement></block></xml>",
  "main.py": "def roll_dice(roll):\n    if roll == 1:\n        adventure.add_image_to_text_log(assets.image(\"\"\"one\"\"\"))\n    elif roll == 2:\n        adventure.add_image_to_text_log(assets.image(\"\"\"two\"\"\"))\n    elif roll == 3:\n        adventure.add_image_to_text_log(assets.image(\"\"\"three\"\"\"))\n    elif roll == 4:\n        adventure.add_image_to_text_log(assets.image(\"\"\"four\"\"\"))\n    elif roll == 5:\n        adventure.add_image_to_text_log(assets.image(\"\"\"five\"\"\"))\n    else:\n        adventure.add_image_to_text_log(assets.image(\"\"\"six\"\"\"))\n\ninfo.player1.set_score(0)\ninfo.player2.set_score(0)\ninfo.player3.set_score(0)\ninfo.player4.set_score(0)\nplayer_roll = 0\nplayer_current_round = 0\n\nwhile info.player1.score() < 100 and not player_roll == 1 and game.ask(\"Player 1\", \"Do you want to roll?\"):\n    player_roll = randint(1,6)\n    roll_dice(player_roll)\n    if player_roll == 1:\n        player_current_round = 0\n    else:\n        player_current_round = player_current_round + player_roll\ninfo.player1.change_score_by(player_current_round)\nplayer_roll = 0\nwhile info.player2.score() < 100 and not player_roll == 1 and game.ask(\"Player 2\", \"Do you want to roll?\"):\n    player_roll = randint(1,6)\n    roll_dice(player_roll)\n    if player_roll == 1:\n        player_current_round = 0\n    else:\n        player_current_round = player_current_round + player_roll\ninfo.player2.change_score_by(player_current_round)\nplayer_roll = 0\nwhile info.player3.score() < 100 and not player_roll == 1 and game.ask(\"Player 3\", \"Do you want to roll?\"):\n    player_roll = randint(1,6)\n    roll_dice(player_roll)\n    if player_roll == 1:\n        player_current_round = 0\n    else:\n        player_current_round = player_current_round + player_roll\ninfo.player3.change_score_by(player_current_round)\nplayer_roll = 0\nwhile info.player4.score() < 100 and not player_roll == 1 and game.ask(\"Player 4\", \"Do you want to roll?\"):\n    player_roll = randint(1,6)\n    roll_dice(player_roll)\n    if player_roll == 1:\n        player_current_round = 0\n    else:\n        player_current_round = player_current_round + player_roll\ninfo.player4.change_score_by(player_current_round)\nplayer_roll = 0\nif info.player1.score() >= 100:\n    adventure.add_to_textlog(\"Player 1 Wins!\")\nelif info.player2.score() >= 100:\n    adventure.add_to_textlog(\"Player 2 Wins!\")\nelif info.player3.score() >= 100:\n    adventure.add_to_textlog(\"Player 3 Wins!\")\nelse:\n    adventure.add_to_textlog(\"Player 3 Wins!\")",
  "main.ts": "function roll_dice(roll: number) {\n    if (roll == 1) {\n        adventure.addImageToTextLog(assets.image`one`)\n    } else if (roll == 2) {\n        adventure.addImageToTextLog(assets.image`two`)\n    } else if (roll == 3) {\n        adventure.addImageToTextLog(assets.image`three`)\n    } else if (roll == 4) {\n        adventure.addImageToTextLog(assets.image`four`)\n    } else if (roll == 5) {\n        adventure.addImageToTextLog(assets.image`five`)\n    } else {\n        adventure.addImageToTextLog(assets.image`six`)\n    }\n    \n}\n\ninfo.player1.setScore(0)\ninfo.player2.setScore(0)\ninfo.player3.setScore(0)\ninfo.player4.setScore(0)\nlet player_roll = 0\nlet player_current_round = 0\nwhile (info.player1.score() < 100 && !(player_roll == 1) && game.ask(\"Player 1\", \"Do you want to roll?\")) {\n    player_roll = randint(1, 6)\n    roll_dice(player_roll)\n    if (player_roll == 1) {\n        player_current_round = 0\n    } else {\n        player_current_round = player_current_round + player_roll\n    }\n    \n}\ninfo.player1.changeScoreBy(player_current_round)\nplayer_roll = 0\nwhile (info.player2.score() < 100 && !(player_roll == 1) && game.ask(\"Player 2\", \"Do you want to roll?\")) {\n    player_roll = randint(1, 6)\n    roll_dice(player_roll)\n    if (player_roll == 1) {\n        player_current_round = 0\n    } else {\n        player_current_round = player_current_round + player_roll\n    }\n    \n}\ninfo.player2.changeScoreBy(player_current_round)\nplayer_roll = 0\nwhile (info.player3.score() < 100 && !(player_roll == 1) && game.ask(\"Player 3\", \"Do you want to roll?\")) {\n    player_roll = randint(1, 6)\n    roll_dice(player_roll)\n    if (player_roll == 1) {\n        player_current_round = 0\n    } else {\n        player_current_round = player_current_round + player_roll\n    }\n    \n}\ninfo.player3.changeScoreBy(player_current_round)\nplayer_roll = 0\nwhile (info.player4.score() < 100 && !(player_roll == 1) && game.ask(\"Player 4\", \"Do you want to roll?\")) {\n    player_roll = randint(1, 6)\n    roll_dice(player_roll)\n    if (player_roll == 1) {\n        player_current_round = 0\n    } else {\n        player_current_round = player_current_round + player_roll\n    }\n    \n}\ninfo.player4.changeScoreBy(player_current_round)\nplayer_roll = 0\nif (info.player1.score() >= 100) {\n    adventure.addToTextlog(\"Player 1 Wins!\")\n} else if (info.player2.score() >= 100) {\n    adventure.addToTextlog(\"Player 2 Wins!\")\n} else if (info.player3.score() >= 100) {\n    adventure.addToTextlog(\"Player 3 Wins!\")\n} else {\n    adventure.addToTextlog(\"Player 3 Wins!\")\n}\n\n",
  "pxt.json": "{\n    \"name\": \"Dice Pig Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"adventure\": \"github:microsoft/arcade-tutorial-extensions/adventure#v0.0.16\",\n        \"pxt-arcade-playing-cards\": \"github:robo-technical-group/pxt-arcade-playing-cards#v1.0.8\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"main.py\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.13.38\",\n        \"tag\": \"v1.13.38\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/7d911f5bee921794c8a31c493a4fde54f9ec5e64\",\n        \"target\": \"1.13.38\",\n        \"pxt\": \"9.1.14\"\n    },\n    \"preferredEditor\": \"pyprj\"\n}\n"
}
```
