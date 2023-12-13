// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level2":return tiles.createTilemap(hex`06000600000000000000000106060604000500000005000500000005000500000005000206060603`, img`
. . . . . . 
. . . . . . 
. . . . . . 
. . . . . . 
. . . . . . 
. . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "city_circuit":
            case "city_circuit1":return tiles.createTilemap(hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000302060000000000000000000000000001000100000000000000000003020202070207020600000000000000010809090909090a0100000000000000010b10101010100e0100000000000000010b10101010100e0100000000000000010b10101010100e0100000000000000010c0d0d0d0d0d0f0402060000000000040202020600030206000100000003020202020205000100010001000000010000000000000001000100010000000100030202060000010001000100000001000100000100000100040205000000040205000004020205000000000000`, img`
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
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath5], TileScale.Sixteen);
            case "city":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000c000000000d0d000000000010000000020101010401010101010101010800000500001005000000000c000000050e0005000e020301010101040101010301120502010705000000000500000f05000005050000050000000005000d0005000005050d00060811000005100000050000090a0101010a0101010301010103010806010800000000001005000000050f0510020a0101010108000500000e050f05020b000e000000050d05000000050f050505000000000c0601070c0000050f0505050d02010101010101010108050f050506010a01010101010101010a03010706010101010101010101010101071100`, img`
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
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile14,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile12], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`10001000000000020b0b0b0b0b05000000020b05020b0b090000000000070b05000a000a0a0000030b0b0b0b0b0400070b09000a0a000000000000000000000a000a000a0a02060b0b0b0b060b0b0b08050a000a0a0a030b0500000a000000000a030b040a0a00000a0000030b0b05000a000000070900000a00000000000a00070b0b050a0a020b010b050000000a000a00000a0a03010b09000a0000000a00070b0b040a000a0201050a0000000a000a0000000a000a0a0a03040000000a000a0000000a000a0a030b0b0b0b0b080b010b05000a00030400000000000000000a000a00030b0b0b0b0b050000020b0b080b0400000000000000030b0b04000000000000`, img`
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
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile5,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile13":return tile13;
            case "myTile1":
            case "tile14":return tile14;
            case "myTile5":
            case "tile18":return tile18;
            case "myTile6":
            case "tile19":return tile19;
            case "myTile7":
            case "tile20":return tile20;
            case "myTile8":
            case "tile21":return tile21;
            case "intersection":
            case "tile4":return tile4;
            case "downright":
            case "tile3":return tile3;
            case "upright":
            case "tile6":return tile6;
            case "upleft":
            case "tile7":return tile7;
            case "leftdown":
            case "tile8":return tile8;
            case "notup":
            case "tile5":return tile5;
            case "notleft":
            case "tile9":return tile9;
            case "notdown":
            case "tile10":return tile10;
            case "notright":
            case "tile11":return tile11;
            case "updown":
            case "tile1":return tile1;
            case "leftright":
            case "tile2":return tile2;
            case "leftright0":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
