namespace SpriteKind {
    export const Enemy1 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile`, function (sprite, location) {
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
        . f 5 5 d b b d d e f . 
        . 5 f f 5 4 4 4 e f f . 
        5 f 2 2 f 5 5 5 5 5 5 e 
        4 5 f f 5 1 1 1 5 f 5 4 
        4 4 5 5 6 6 6 6 5 f 5 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
    tiles.coverAllTiles(assets.tile`tile`, sprites.castle.tileDarkGrass1)
    tiles.coverAllTiles(sprites.dungeon.chestClosed, sprites.dungeon.chestOpen)
    tiles.setWallAt(tiles.getTileLocation(12, 14), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
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
    info.stopCountdown()
    startLevel2()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    startLevel2()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    tiles.coverAllTiles(assets.tile`tile7`, sprites.castle.tileDarkGrass1)
    tiles.coverAllTiles(sprites.castle.rock1, sprites.dungeon.floorLight0)
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
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 1 f f . . . . . . 
        . . . . . f 1 f f f f . . . . . 
        . . . . . f 1 f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Soldier, randint(-200, 200), 10)
    projectile.setBounceOnWall(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
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
    tiles.coverAllTiles(assets.tile`tile3`, sprites.castle.tileGrass3)
    tiles.coverAllTiles(sprites.castle.rock0, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
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
    startLevel()
})
function startLevel2 () {
    tiles.setTilemap(tilemap`level7`)
    Soldier.setPosition(70, 200)
    Snake_2 = sprites.create(img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    Snake_2.setPosition(170, 30)
    Snake_2.setBounceOnWall(true)
    Snake_2.setStayInScreen(true)
    Snake_2.follow(Soldier, 20)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
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
    info.stopCountdown()
    game.over(true)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    music.playTone(262, music.beat(BeatFraction.Breve))
    otherSprite = sprites.create(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    otherSprite.setPosition(randint(0, 360), randint(0, 360))
    otherSprite.setStayInScreen(true)
    otherSprite.follow(Soldier, 20)
    otherSprite.setBounceOnWall(true)
})
function startLevel () {
    tiles.setTilemap(tilemap`level2`)
    Soldier.setPosition(0, 120)
    otherSprite = sprites.create(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    otherSprite.setPosition(170, 30)
    otherSprite.setStayInScreen(true)
    otherSprite.follow(Soldier, 20)
    otherSprite.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerDown.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let otherSprite: Sprite = null
let Snake_2: Sprite = null
let projectile: Sprite = null
let Soldier: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
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
Soldier.setPosition(26, 248)
controller.moveSprite(Soldier)
Soldier.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(Soldier)
