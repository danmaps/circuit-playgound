function moveWithPixel(pixel: number, color: number, doMove: () => void) {
    light.setPixelColor(pixel, color)
    doMove()
    light.setPixelColor(pixel, 0)
}
light.showAnimation(light.sparkleAnimation, 1000)
light.clear()
forever(function () {
    moveWithPixel(0, Colors.Red, function () {
        crickit.servo1.setAngle(180)
        pause(200)
        crickit.servo1.setAngle(0)
        pause(200)
    })
moveWithPixel(3, Colors.Yellow, function () {
        crickit.servo2.setAngle(180)
        pause(200)
        crickit.servo2.setAngle(0)
        pause(200)
    })
moveWithPixel(6, Colors.Green, function () {
        crickit.servo3.setAngle(180)
        pause(200)
        crickit.servo3.setAngle(0)
        pause(200)
    })
moveWithPixel(9, Colors.Blue, function () {
        crickit.servo4.setAngle(180)
        pause(200)
        crickit.servo4.setAngle(0)
        pause(200)
    })
})
