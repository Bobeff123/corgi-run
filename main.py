@namespace
class SpriteKind:
    food2 = SpriteKind.create()
    food3 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global myEnemy
    info.change_score_by(1)
    mySprite3.destroy(effects.spray, 500)
    myEnemy = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    myEnemy.set_position(99, 115)
sprites.on_overlap(SpriteKind.player, SpriteKind.food3, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    global mySprite3
    info.change_score_by(1)
    mySprite3 = sprites.create(img("""
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
        """),
        SpriteKind.food3)
    mySprite3.set_position(73, 68)
    mySprite2.destroy(effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.food2, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    global mySprite2
    info.change_score_by(1)
    mySprite.destroy(effects.spray, 500)
    game.splash("YAY! You now leveled up press up to jump.")
    myCorg.vertical_movement(True)
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.food2)
    mySprite2.set_position(74, 95)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap3)

mySprite2: Sprite = None
myEnemy: Sprite = None
mySprite3: Sprite = None
mySprite: Sprite = None
myCorg: Corgio = None
myCorg = corgio.create(SpriteKind.player)
pause(1000)
game.splash("Hey, WAKE UP!")
myCorg.update_sprite(True)
pause(500)
game.splash("good morning press arrows to move ")
myCorg.horizontal_movement()
pause(5000)
game.splash("Come to the bone")
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.food)
mySprite.set_position(132, 114)
info.set_score(0)