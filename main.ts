input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
function ShowAware () {
    HasHeardSomething = 1
    led.setBrightness(128)
    basic.showIcon(IconNames.SmallDiamond)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
}
input.onButtonPressed(Button.AB, function () {
    Initialize()
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
function Initialize () {
    music.setBuiltInSpeakerEnabled(false)
    HasHeardSomething = 0
    basic.clearScreen()
}
function ClearScreen () {
    basic.clearScreen()
}
function ShowAngry () {
    HasHeardSomething = 2
    led.setBrightness(255)
    basic.showIcon(IconNames.Angry)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
}
let HasHeardSomething = 0
Initialize()
basic.forever(function () {
    if (input.soundLevel() > 80 && HasHeardSomething < 2) {
        ShowAngry()
    } else if (input.soundLevel() > 30 && HasHeardSomething < 1) {
        ShowAware()
    }
})
loops.everyInterval(3000, function () {
    if (input.soundLevel() < 10 && HasHeardSomething == 0) {
        ClearScreen()
    }
    HasHeardSomething = 0
})
