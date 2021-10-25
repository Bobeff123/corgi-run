let myCorg = corgio.create(SpriteKind.Player)
pause(1000)
game.splash("Hey, WAKE UP!")
myCorg.updateSprite()
pause(500)
game.splash("good morning press arrows to move ")
myCorg.horizontalMovement()
pause(10000)
game.splash("Come to the bone")
let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite.setPosition(128, 105)
