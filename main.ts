function CallWarden () {
    radio.sendNumber(1)
    NumberOfSoundsHeard = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
input.onButtonPressed(Button.A, function () {
    CallWarden()
})
function LogSoundHeard () {
    NumberOfSoundsHeard += 1
    if (NumberOfSoundsHeard == 3) {
        CallWarden()
    } else {
        basic.showNumber(NumberOfSoundsHeard)
    }
}
input.onButtonPressed(Button.B, function () {
    LogSoundHeard()
})
let NumberOfSoundsHeard = 0
NumberOfSoundsHeard = 0
let EnableCounting = true
radio.setGroup(1)
basic.forever(function () {
    if (EnableCounting) {
        if (input.soundLevel() > 80) {
            EnableCounting = false
            CallWarden()
        } else if (input.soundLevel() > 30) {
            EnableCounting = false
            LogSoundHeard()
        }
    }
})
loops.everyInterval(5000, function () {
    EnableCounting = true
    basic.clearScreen()
})
