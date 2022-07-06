input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 255, 1000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
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
    music.stopMelody(MelodyStopOptions.All)
    led.plotBarGraph(
    1,
    10
    )
})
let hastighed = 0
hastighed = 400
basic.forever(function () {
	
})
