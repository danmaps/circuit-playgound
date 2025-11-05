// --- CONFIG ---
const MIN_ANGLE = 0       // tighter if sticks are long
const MAX_ANGLE = 180
const SPEED = 0.20       // lower = slower, smoother
const TICK = 5
const PIX = [0, 3, 6, 9]

// ---- STATE ----
let t = 0

function servoSet(i: number, angle: number) {
    switch (i) {
        case 0: crickit.servo1.setAngle(angle); break
        case 1: crickit.servo2.setAngle(angle); break
        case 2: crickit.servo3.setAngle(angle); break
        case 3: crickit.servo4.setAngle(angle); break
    }
}

function centerAll(angle: number) {
    for (let i = 0; i < 4; i++) servoSet(i, angle)
    light.setAll(Colors.White)
}

function tentacle(i: number): number {
    const phase = i * Math.PI / 2
    const s = Math.sin(t + phase)
    const frac = (s + 1) / 2
    return Math.round(MIN_ANGLE + frac * (MAX_ANGLE - MIN_ANGLE))
}

// ---- MAIN LOOP ----
forever(function () {
    if (input.switchRight()) {
        // --- RUN MODE ---
        light.clear()
        for (let i = 0; i < 4; i++) {
            const angle = tentacle(i)
            servoSet(i, angle)
            const hue = Math.map(angle, MIN_ANGLE, MAX_ANGLE, 0, 255)
            light.setPixelColor(PIX[i], light.hsv(hue, 255, 100))
        }
        t += SPEED
        pause(TICK)
    } else {
        // --- CONFIG MODE ---
        centerAll(0)   // or use 90 for neutral pose
        pause(100)
    }
})
