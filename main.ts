input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # # # # .
        # . . # .
        # . . # .
        # . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        # . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(1000)
    basic.showString("A")
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # . . . #
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # . .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # . . .
        # . # . .
        # # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("D C F C D C F C ", hastighed)
    music.playMelody("B C5 B A B C5 B A ", hastighed)
    music.playMelody("C5 B A G F E D C ", hastighed)
    music.playMelody("C D E F G A B C5 ", hastighed)
    music.playMelody("C5 C C5 C C5 C C5 C ", hastighed)
    music.playMelody("C5 D B D G D E D ", hastighed)
    music.playMelody("C E G B C5 B G E ", hastighed)
    music.playMelody("C E G B C5 B G E ", hastighed)
    music.playMelody("C5 B C D B A D E ", hastighed)
    music.stopMelody(MelodyStopOptions.All)
    led.plotBarGraph(
    1,
    10
    )
})
let hastighed = 0
hastighed = 400
