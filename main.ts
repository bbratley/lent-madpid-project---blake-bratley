scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    info.startCountdown(10)
    Soldier.setImage(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e 2 f f f f 
        f f f 4 4 4 e 5 2 f f f 
        f f f 4 4 4 d d 5 f f f 
        f 4 e 4 4 4 d 4 4 e 4 f 
        f 4 4 f f 4 d f f 4 4 f 
        f e 4 d f f f f d 4 e f 
        . f e f f f f f f e f . 
        . f f f 2 f 2 f f f f . 
        e f f f f 2 f f f f f e 
        4 f f f 2 f 2 f f f f 4 
        4 f f f f f f f f f f 4 
        . . f f f f f f f f f . 
        . . . f f f f f f f . . 
        `)
    tiles.setWallAt(tiles.getTileLocation(7, 2), false)
    tiles.coverAllTiles(sprites.castle.rock0, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    Soldier.setImage(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
    Soldier.say("PHEW", 2000)
    info.stopCountdown()
})
let Soldier: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101040202020202020202060303010101010302020202030306020101030101010108020202030302020201010303010101030102020302020202010101030301010302020203020202020101010103030303030302030202020201010101030202020203030303020202010101010303020202020203030202020101010102030202020202030202020201010101020303030302020302020202010101010202020203020203020202020101010106020202030202030202020201010101030202030302020303020202010303030303030302020202030302020103020203020202020202020203030501070202030303030602020603030202`, img`
    2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
    2 . . 2 2 2 2 . 2 2 2 2 . . 2 2 
    2 2 . 2 2 2 2 2 2 2 2 . . 2 2 2 
    2 2 . . 2 2 2 . 2 2 2 . 2 2 2 2 
    2 2 2 . . 2 2 . 2 2 2 . 2 2 2 2 
    2 2 2 2 . . . . . . 2 . 2 2 2 2 
    2 2 2 2 . 2 2 2 2 . . . . 2 2 2 
    2 2 2 2 . . 2 2 2 2 2 . . 2 2 2 
    2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 
    2 2 2 2 2 . . . . 2 2 . 2 2 2 2 
    2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 
    2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 
    2 2 2 2 . 2 2 . . 2 2 . . 2 2 2 
    2 . . . . . . . 2 2 2 2 . . 2 2 
    2 . 2 2 . 2 2 2 2 2 2 2 2 . . . 
    2 . 2 2 . . . . 2 2 2 2 . . 2 2 
    `, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile3,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.castle.rock0], TileScale.Sixteen))
Soldier = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
Soldier.setPosition(0, 125)
controller.moveSprite(Soldier)
Soldier.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(Soldier)
