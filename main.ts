input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
function lyd () {
    music.playMelody("C5 D B D G D E D ", hastighed)
    music.playMelody("C D E F G A B C5 ", hastighed)
    music.playMelody("C D E F G A B C5 ", hastighed)
    music.stopMelody(MelodyStopOptions.All)
}
input.onButtonPressed(Button.B, function () {
    music.playMelody("D C F C D C F C ", 400)
    music.playMelody("B C5 B A B C5 B A ", 400)
    music.playMelody("C5 B A G F E D C ", 400)
    music.playMelody("C D E F G A B C5 ", 400)
    music.playMelody("C5 C C5 C C5 C C5 C ", 400)
    led.plotBarGraph(
    1,
    10
    )
})
input.onPinPressed(TouchPin.P1, function () {
    lyd()
})
input.onGesture(Gesture.ScreenUp, function () {
    lyd()
})
let hastighed = 0
hastighed = 120
basic.forever(function () {
	
})
