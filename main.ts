namespace SpriteKind {
    export const LeftPaddle = SpriteKind.create()
}
function makeBall () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setVelocity(50, 50)
    mySprite.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite.x = randint(0, scene.screenHeight())
}
function makePaddle () {
    leftPaddle = sprites.create(img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        `, SpriteKind.LeftPaddle)
    controller.moveSprite(leftPaddle, 0, 100)
    leftPaddle.setFlag(SpriteFlag.StayInScreen, true)
    leftPaddle.x = 0
}
function makeRPaddle () {
    rightPaddle = sprites.create(img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        `, SpriteKind.LeftPaddle)
    controller.player2.moveSprite(rightPaddle, 0, 100)
    rightPaddle.setFlag(SpriteFlag.StayInScreen, true)
    rightPaddle.x = 160
}
let rightPaddle: Sprite = null
let leftPaddle: Sprite = null
let mySprite: Sprite = null
makeBall()
makePaddle()
makeRPaddle()
