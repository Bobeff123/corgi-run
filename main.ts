namespace SpriteKind {
    export const food2 = SpriteKind.create()
    export const food3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite, otherSprite) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.food3)
    mySprite3.setPosition(69, 59)
    mySprite2.destroy()
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 . . f d . . . 
        . . . . . . f 4 f . . f . d . . 
        . . . . . . 4 4 4 . . f d . d . 
        . . . . . 5 5 2 5 5 . f . d . . 
        . . . . 4 2 2 2 2 2 4 f d . . . 
        . . . . . 5 2 2 2 5 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.destroy()
    game.splash("YAY! You now leveled up press up to jump.")
    myCorg.verticalMovement(true)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . 1 1 1 . . . . . . . . . 1 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.food2)
    mySprite2.setPosition(74, 95)
})
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let myCorg: Corgio = null
myCorg = corgio.create(SpriteKind.Player)
pause(1000)
game.splash("Hey, WAKE UP!")
myCorg.updateSprite(true)
pause(500)
game.splash("good morning press arrows to move ")
myCorg.horizontalMovement()
pause(5000)
game.splash("Come to the bone")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . 1 1 1 
    . 1 1 1 . . . . . . . . . 1 1 1 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 1 . . . . . . . . . 1 1 1 
    . 1 1 1 . . . . . . . . . 1 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite.setPosition(132, 114)
info.setScore(0)
