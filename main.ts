namespace SpriteKind {
    export const map = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`BoatAnimationL`,
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite3: Sprite = null
    animation.runImageAnimation(
    mySprite3,
    assets.animation`myAnim`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite2,
    assets.animation`BoatAnimationR`,
    500,
    true
    )
})
let mySprite2: Sprite = null
mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2, 20, 20)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level3`)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(13, 5))
