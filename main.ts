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
    animation.runImageAnimation(
    mySprite2,
    assets.animation`BoatAnimationR`,
    500,
    true
    )
})
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.map)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f 1 f 1 f . . . . . . 
    . . . . . f 1 f 1 f f . . . . . 
    . . . . f 1 8 f 8 1 f . . . . . 
    . . . . f 8 1 f 1 8 1 f . . . . 
    . . . f 1 8 1 f 1 8 1 f f . . . 
    . . . f 1 8 1 f 1 8 8 1 f . . . 
    . . f 1 8 1 1 f 1 1 1 8 1 f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . f . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . . f 8 1 8 1 8 1 8 1 8 1 f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2, 20, 20)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
