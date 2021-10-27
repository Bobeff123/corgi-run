namespace SpriteKind {
    export const food2 = SpriteKind.create()
    export const food3 = SpriteKind.create()
    export const bomb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite3.destroy(effects.spray, 500)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . 2 . . . . . 2 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . 2 2 2 . . 2 2 . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . 2 2 . . . . . . 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(99, 115)
    myEnemy.setVelocity(50, 0)
    myEnemy.setBounceOnWall(true)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 . . . 7 . . . . . . 
        . . . . . 7 7 . . 7 . . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . . 7 7 . . . . . . . . 7 . . 
        . . . . . 7 . . . . . . 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bomb)
    mySprite4.setPosition(134, 80)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bomb, function (sprite, otherSprite) {
    myEnemy.destroy(effects.smiles, 500)
    mySprite4.destroy(effects.smiles, 500)
    pause(1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite2, otherSprite2) {
    info.changeScoreBy(1)
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
    mySprite3.setPosition(73, 68)
    mySprite2.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite3, otherSprite3) {
    info.changeScoreBy(1)
    mySprite.destroy(effects.spray, 500)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let myEnemy: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let myCorg: Corgio = null
myCorg = corgio.create(SpriteKind.Player)
pause(1000)
game.splash("Hey, WAKE UP!")
myCorg.sayText(":)")
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
