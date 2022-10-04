input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    _catch = game.createSprite(randint(0, 4), 0)
    _ = 1
})
let score = 0
let _ = 0
let _catch: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
basic.forever(function () {
    while (_ == 1) {
        for (let index = 0; index < 4; index++) {
            _catch.change(LedSpriteProperty.Y, 1)
            basic.pause(1000)
        }
        if (player.isTouching(_catch)) {
            score += 1
        }
        _catch.set(LedSpriteProperty.Y, 0)
        _catch.set(LedSpriteProperty.X, randint(0, 4))
        basic.pause(500)
    }
})
