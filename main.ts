let y: number;
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    dani.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    dani.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    dani.change(LedSpriteProperty.X, 1)
})
let dani : game.LedSprite = null
dani = game.createSprite(4, 4)
let food = game.createSprite(3, 4)
let food_2 = game.createSprite(4, 3)
let food_3 = game.createSprite(3, 3)
let food_4 = game.createSprite(0, 3)
let food_5 = game.createSprite(2, 2)
let food_6 = game.createSprite(1, 2)
let food_7 = game.createSprite(4, 1)
let food_8 = game.createSprite(3, 1)
let food_9 = game.createSprite(0, 1)
let food_10 = game.createSprite(4, 0)
let food_11 = game.createSprite(1, 0)
let a = 2
while (true) {
    y = randint(1, 5)
    if (a != y) {
        break
    }
    
}
let evil = game.createSprite(2, y)
dani.set(LedSpriteProperty.Brightness, 8)
basic.forever(function on_forever() {
    if (dani.isTouching(food)) {
        food.delete()
    }
    
    if (dani.isTouching(food_2)) {
        food_2.delete()
    }
    
    if (dani.isTouching(food_3)) {
        food_3.delete()
    }
    
    if (dani.isTouching(food_4)) {
        food_4.delete()
    }
    
    if (dani.isTouching(food_5)) {
        food_5.delete()
    }
    
    if (dani.isTouching(food_6)) {
        food_6.delete()
    }
    
    if (dani.isTouching(food_8)) {
        food_8.delete()
    }
    
    if (dani.isTouching(food_7)) {
        food_7.delete()
    }
    
    if (dani.isTouching(food_9)) {
        food_9.delete()
    }
    
    if (dani.isTouching(food_10)) {
        food_10.delete()
    }
    
    if (dani.isTouching(food_11)) {
        food_11.delete()
    }
    
    if (dani.isTouching(evil)) {
        game.gameOver()
    }
    
})
