function CallWarden () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    radio.sendNumber(1)
    NumberOfSoundsHeard = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    }
}
input.onButtonPressed(Button.A, function () {
    CallWarden()
})
function LogSoundHeard () {
    NumberOfSoundsHeard += 1
    pins.digitalWritePin(DigitalPin.P0, 1)
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
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
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
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    EnableCounting = true
    basic.clearScreen()
})
