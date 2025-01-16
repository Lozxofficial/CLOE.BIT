pins.onPulsed(DigitalPin.P5, PulseValue.Low, function () {
    if (1 == LC) {
        Y += -1
    }
})
pins.onPulsed(DigitalPin.P4, PulseValue.Low, function () {
    if (1 == LC) {
        Y += 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (page_number > 0) {
        page_number += 1
    }
})
pins.onPulsed(DigitalPin.P6, PulseValue.High, function () {
    if (1 == LC) {
        doSomething()
    }
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    if (1 == LC) {
        Y += -1
    }
})
function doSomething () {
	
}
pins.onPulsed(DigitalPin.P3, PulseValue.Low, function () {
    if (1 == LC) {
        Y += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    page_number = 1
})
input.onButtonPressed(Button.B, function () {
    if (page_number == 1) {
        control.reset()
        page_number = 6
    }
    if (page_number == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(5000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(5000)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(5000)
        strip.showRainbow(1, 360)
        strip.show()
        page_number = 6
    }
    if (page_number == 3) {
    	
    }
    if (page_number == 4) {
    	
    }
    if (page_number == 5) {
    	
    }
})
let page_number = 0
let LC = 0
let strip: neopixel.Strip = null
music.setBuiltInSpeakerEnabled(true)
let Y = 14
let X = 0
let login_complete = 0
strip = neopixel.create(DigitalPin.P0, 90, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
serial.setBaudRate(BaudRate.BaudRate9600)
music.setBuiltInSpeakerEnabled(true)
let matrix = SmartMatrix.create(
DigitalPin.P1,
16,
16,
NeoPixelMode.RGB
)
matrix.Brightness(100)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
for (let index = 0; index < 24; index++) {
    matrix.setPixel(8, 7, neopixel.colors(NeoPixelColors.White))
    matrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Red))
    matrix.show()
    basic.pause(100)
    matrix.clear()
    matrix.show()
    matrix.setPixel(9, 8, neopixel.colors(NeoPixelColors.White))
    matrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Red))
    matrix.setPixel(1, 0, neopixel.colors(NeoPixelColors.Yellow))
    matrix.show()
    basic.pause(100)
    matrix.clear()
    matrix.setPixel(8, 9, neopixel.colors(NeoPixelColors.White))
    matrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Red))
    matrix.setPixel(1, 0, neopixel.colors(NeoPixelColors.Yellow))
    matrix.setPixel(2, 0, neopixel.colors(NeoPixelColors.Orange))
    matrix.show()
    basic.pause(100)
    matrix.clear()
    matrix.setPixel(7, 8, neopixel.colors(NeoPixelColors.White))
    matrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Red))
    matrix.setPixel(1, 0, neopixel.colors(NeoPixelColors.Yellow))
    matrix.setPixel(2, 0, neopixel.colors(NeoPixelColors.Orange))
    matrix.setPixel(3, 0, neopixel.colors(NeoPixelColors.Green))
    matrix.setPixel(15, 15, neopixel.colors(NeoPixelColors.Green))
    matrix.show()
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    basic.pause(150)
    matrix.clear()
    login_complete += 1
}
loops.everyInterval(20, function () {
    if ((15 as any) == (0 as any)) {
        Y = 0
    }
    if ((16 as any) == (0 as any)) {
        Y = 14
    }
})
basic.forever(function () {
    if (1 == LC) {
        matrix.setPixel(X, Y, neopixel.colors(NeoPixelColors.White))
        matrix.show()
        basic.pause(50)
    }
})
basic.forever(function () {
    if (login_complete == 24) {
        if (LC == 0) {
            matrix.clear()
            matrix.setPixel(8, 7, neopixel.colors(NeoPixelColors.Red))
            matrix.setPixel(9, 8, neopixel.colors(NeoPixelColors.Green))
            matrix.setPixel(8, 9, neopixel.colors(NeoPixelColors.Blue))
            matrix.setPixel(7, 8, neopixel.colors(NeoPixelColors.Indigo))
            matrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Red))
            matrix.setPixel(0, 0, neopixel.colors(NeoPixelColors.Black))
            matrix.show()
            music.play(music.stringPlayable("B G F B G A C5 F ", 323), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("B G F B G A C5 F ", 323), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("B C5 B C5 B - - - ", 323), music.PlaybackMode.UntilDone)
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Indigo))
            matrix.show()
            music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(500)
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Black))
            matrix.show()
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Orange))
            matrix.show()
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(500)
            basic.pause(0)
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Black))
            matrix.show()
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.White))
            matrix.show()
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            basic.pause(1000)
            matrix.clear()
            matrix.show()
            matrix.setPixel(0, 15, neopixel.colors(NeoPixelColors.Indigo))
            matrix.setPixel(1, 15, neopixel.colors(NeoPixelColors.Blue))
            matrix.setPixel(0, 14, neopixel.colors(NeoPixelColors.White))
            matrix.show()
            LC = 1
        }
    }
})
basic.forever(function () {
    if (page_number == 6) {
        page_number = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (page_number == 1) {
        basic.showNumber(1)
    }
    if (page_number == 2) {
        basic.showNumber(2)
    }
    if (page_number == 3) {
        basic.showNumber(3)
    }
    if (page_number == 4) {
        basic.showNumber(4)
    }
    if (page_number == 5) {
        basic.showNumber(5)
    }
})
