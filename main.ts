let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    while (distance > 40) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # . # . #
            # # # # #
            `)
    }
    if (input.soundLevel() > 240) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # . # . #
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
    }
})
