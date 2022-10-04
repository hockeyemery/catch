input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    if (game.isPaused()) {
        game.resume()
    } else {
        game.pause()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (_ == 0) {
        _catch = game.createSprite(randint(0, 4), 0)
        _ = 1
        delay = 1000
        basic.pause(30000)
        delay = 750
        basic.pause(45000)
        delay = 500
    }
})
let delay = 0
let _catch: game.LedSprite = null
let score = 0
let _ = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
_ = 0
basic.forever(function () {
    while (_ == 1) {
        for (let index = 0; index < 4; index++) {
            _catch.change(LedSpriteProperty.Y, 1)
            basic.pause(delay)
        }
        if (player.isTouching(_catch)) {
            score += 1
        }
        _catch.set(LedSpriteProperty.Y, 0)
        _catch.set(LedSpriteProperty.X, randint(0, 4))
        basic.pause(500)
    }
})
