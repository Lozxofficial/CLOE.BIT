input.onButtonPressed(Button.A, function () {
    if (page_number > 0) {
        page_number += 1
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
let LC = 0
let page_number = 0
let strip: neopixel.Strip = null
music.setBuiltInSpeakerEnabled(true)
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
matrix.Brightness(32)
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
basic.forever(function () {
    if (login_complete == 4) {
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
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(500)
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Black))
            matrix.show()
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Orange))
            matrix.show()
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(500)
            basic.pause(0)
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.Black))
            matrix.show()
            matrix.setPixel(8, 8, neopixel.colors(NeoPixelColors.White))
            matrix.show()
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            basic.pause(1000)
            matrix.clear()
            matrix.show()
            matrix.setPixel(0, 15, neopixel.colors(NeoPixelColors.Indigo))
            matrix.setPixel(1, 15, neopixel.colors(NeoPixelColors.Blue))
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
