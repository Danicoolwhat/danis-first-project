def on_button_pressed_a():
    dani.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    dani.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    dani.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

dani: game.LedSprite = None
dani = game.create_sprite(4, 4)
food = game.create_sprite(3, 4)
food_2 = game.create_sprite(4, 3)
food_3 = game.create_sprite(3, 3)
food_4 = game.create_sprite(0, 3)
food_5 = game.create_sprite(2, 2)
food_6 = game.create_sprite(1, 2)
food_7 = game.create_sprite(4, 1)
food_8 = game.create_sprite(3, 1)
food_9 = game.create_sprite(0, 1)
food_10 = game.create_sprite(4, 0)
food_11 = game.create_sprite(1, 0)
a = 2
while True:
    y = randint(1, 5)
    if a != y:
        break
evil = game.create_sprite(2, y)
dani.set(LedSpriteProperty.BRIGHTNESS, 8)

def on_forever():
    if dani.is_touching(food):
        food.delete()
    if dani.is_touching(food_2):
        food_2.delete()
    if dani.is_touching(food_3):
        food_3.delete()
    if dani.is_touching(food_4):
        food_4.delete()
    if dani.is_touching(food_5):
        food_5.delete()
    if dani.is_touching(food_6):
        food_6.delete()
    if dani.is_touching(food_8):
        food_8.delete()
    if dani.is_touching(food_7):
        food_7.delete()
    if dani.is_touching(food_9):
        food_9.delete()
    if dani.is_touching(food_10):
        food_10.delete()
    if dani.is_touching(food_11):
        food_11.delete()
    if dani.is_touching(evil):
        game.game_over()
basic.forever(on_forever)
