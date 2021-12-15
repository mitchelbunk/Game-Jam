namespace SpriteKind {
    export const map2 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    blockMenu.showMenu([blockMenu.selectedMenuOption()], MenuStyle.List, MenuLocation.BottomHalf)
    blockMenu.setColors(15, 1)
    if (controller.A.isPressed() && blockMenu.isMenuOpen()) {
        blockMenu.closeMenu()
        tiles.setTilemap(tilemap`level7`)
    } else if (controller.A.isPressed() && blockMenu.isMenuOpen()) {
        blockMenu.closeMenu()
        tiles.setTilemap(tilemap`level8`)
    } else {
    	
    }
})
function level1 () {
    if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile22`) || mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile23`) || mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile24`) || mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile14`)) {
    	
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`BoatAnimationL`,
    500,
    true
    )
})
let mySprite2: Sprite = null
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2, 30, 30)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level3`)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(12, 5))
mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
