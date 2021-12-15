@namespace
class SpriteKind:
    map2 = SpriteKind.create()

def on_left_pressed():
    animation.run_image_animation(mySprite2,
        assets.animation("""
            BoatAnimationL
        """),
        500,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    animation.run_image_animation(mySprite2,
        assets.animation("""
            BoatAnimationR
        """),
        500,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

mySprite2: Sprite = None
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(mySprite2)
controller.move_sprite(mySprite2, 20, 20)
scene.set_background_color(6)
tiles.set_tilemap(tilemap("""
    level3
"""))