sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let pokebola: Sprite = null
game.splash("VALERIA LA MOLACHA")
music.powerUp.play()
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass3], TileScale.Sixteen))
info.startCountdown(60)
info.setScore(0)
let Valeria = sprites.create(img`
    . . . f f f f f f f . . . . . . 
    . . e 4 4 4 4 4 4 f e . . . . . 
    . e e 4 4 4 4 4 4 4 e e . . . . 
    . e 4 f f 4 4 f f 4 4 e e . . . 
    e e 4 f f 4 4 f f 4 4 4 e . . . 
    e e 4 4 3 4 4 4 4 3 4 4 e e . . 
    e . . 4 4 3 3 3 3 4 4 . . e . . 
    . . . . f f f f f f . . . . . . 
    . . . f f 5 5 5 5 f f . . f . . 
    f f f f 5 5 5 5 5 f f f f f . . 
    . . . f 5 5 5 5 5 f . . . . . . 
    . . . f 5 f f f 5 f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . . f . . . f f . . . . . . 
    . . f f f . . . f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Valeria)
scene.cameraFollowSprite(Valeria)
game.onUpdateInterval(500, function () {
    pokebola = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 f f 2 2 2 2 2 . . . 
        . . 2 2 2 f 1 1 f 2 2 2 2 . . . 
        . . f f f f 1 1 f f f f f . . . 
        . . f 1 1 f 1 1 f 1 1 1 f . . . 
        . . f 1 1 1 f f 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pokebola.setPosition(randint(0, 160), randint(0, 120))
})
