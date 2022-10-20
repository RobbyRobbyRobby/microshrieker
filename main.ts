let HasHeardSomething = 0
input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
function ClearScreen () {
    basic.clearScreen()
}
basic.forever(function () {
    if (input.soundLevel() > 80 && HasHeardSomething < 2) {
    	
    } else if (input.soundLevel() > 30 && HasHeardSomething < 1) {
    	
    }
})
loops.everyInterval(3000, function () {
    if (input.soundLevel() < 10 && HasHeardSomething == 0) {
        ClearScreen()
    }
    HasHeardSomething = 0
})
