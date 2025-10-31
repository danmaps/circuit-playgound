// Light a pixel while a servo moves, then turn it off
function moveWithPixel(pixel: number, color: number, doMove: () => void) {
    light.setPixelColor(pixel, color)
    doMove()
    light.setPixelColor(pixel, 0)
}

light.showAnimation(light.sparkleAnimation, 1000)
light.clear()

forever(function () {
    // SERVO 1  (pixel 0)
    moveWithPixel(0, Colors.Red, function () {
        crickit.servo1.setAngle(180)
        pause(200)
        crickit.servo1.setAngle(0)
        pause(200)
    })

    // SERVO 2  (pixel 3)
    moveWithPixel(3, Colors.Yellow, function () {
        crickit.servo2.setAngle(90)
        pause(200)
        crickit.servo2.setAngle(0)
        pause(200)
    })

    // SERVO 3  (pixel 6)
    moveWithPixel(6, Colors.Green, function () {
        crickit.servo3.setAngle(180)
        pause(200)
        crickit.servo3.setAngle(0)
        pause(200)
    })

    // SERVO 4  (pixel 9)
    moveWithPixel(9, Colors.Blue, function () {
        crickit.servo4.setAngle(90)
        pause(200)
        crickit.servo4.setAngle(0)
        pause(200)
    })
})
