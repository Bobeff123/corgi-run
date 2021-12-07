namespace SpriteKind {
    export const food2 = SpriteKind.create()
    export const food3 = SpriteKind.create()
    export const bomb = SpriteKind.create()
    export const Food4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite3.destroy(effects.spray, 500)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`Poacher`,
    500,
    false
    )
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
    animation.runImageAnimation(
    mySprite4,
    assets.animation`Car off`,
    200,
    true
    )
    mySprite4.setPosition(134, 80)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food4, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite5.destroy()
    scene.setBackgroundImage(assets.image`BOSS Seane`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bomb, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite4,
    assets.animation`Car on`,
    200,
    false
    )
    mySprite4.follow(myEnemy)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.bomb, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite4.destroy(effects.fire, 500)
    myEnemy.destroy(effects.ashes, 500)
    pause(1000)
    effects.confetti.startScreenEffect(500)
    game.splash("Level 2", "The expansion")
    myCorg.follow()
    game.splash("The expansion of the world has come.")
    mySprite5 = sprites.create(assets.image`Bone`, SpriteKind.Food4)
    mySprite5.setPosition(170, 115)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite2, otherSprite2) {
    info.changeScoreBy(1)
    mySprite3 = sprites.create(assets.image`Bone`, SpriteKind.food3)
    mySprite3.setPosition(73, 68)
    mySprite2.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite3, otherSprite3) {
    info.changeScoreBy(1)
    mySprite.destroy(effects.spray, 500)
    game.splash("YAY! You now leveled up press up to jump.")
    myCorg.verticalMovement(true)
    mySprite2 = sprites.create(assets.image`Bone`, SpriteKind.food2)
    mySprite2.setPosition(74, 95)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let myEnemy: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let myCorg: Corgio = null
let Music = 0
game.splash("Level 1", "Dream desert")
myCorg = corgio.create(SpriteKind.Player)
scene.setBackgroundImage(assets.image`dream desert`)
pause(1000)
game.splash("Hey, WAKE UP!")
Music += 1
myCorg.updateSprite(true)
pause(500)
game.splash("good morning press arrows to move ")
myCorg.horizontalMovement()
pause(5000)
game.splash("Come to the bone")
mySprite = sprites.create(assets.image`Bone`, SpriteKind.Food)
mySprite.setPosition(132, 114)
info.setScore(0)
forever(function () {
    while (Music == 1) {
        music.playMelody("C5 B C5 B A G A B ", 120)
    }
})
