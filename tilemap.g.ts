// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101040202020202020202060303010101010302020202030306020101030101010108020202030302020201010303010101030102020302020202010101030301010302020203020202020101010103030303030302030202020201010101030202020203030303020202010101010303020202020203030202020101010102030202020202030202020201010101020303030302020302020202010101010202020203020203020202020101010106020202030202030202020201010101030202030302020303020202010303030303030302020202030302020103020203020202020202020203030501070202030303030602020603030202`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile3,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.castle.rock0], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100007070707070707070707070707070707070707070707070707070707070707070707070707030303030303070707070707070303030307070707030503010707070303070706070707070307070707070703070707030707070703070707070707030707070307070707030707070707040303030303030303030307070607070707030707070707030707070703070707070307070707030303030303030707070703070707070307070307070707070707030707070703070703070707070707070303070707030707030303030707070707030703030307070707070307070707070307030707070707070702070706030303030307070707070707070707`, img`
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
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,sprites.castle.tilePath5,sprites.dungeon.collectibleInsignia,sprites.castle.rock0,sprites.builtin.forestTiles0,sprites.castle.tileGrass1], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100001010101010101040202020202020202060303010101010302020202030306020101030101010108020202030302020201010303010101030102020302020202010101030301010302020203020202020101010103030303030302030202020201010101030202020203030303020202010101010303020202020203030202020101010102030202020202030202020201010101020303030302020302020202010101010202020203020203020202020101010106020202030202030202020201010101030202030302020303020202010303030303030302020202030302020103020203020202020202020203030501070202030303030602020603030202`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile3,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.castle.rock0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
