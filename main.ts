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
    }
    if (page_number == 3) {
    	
    }
    if (page_number == 4) {
    	
    }
    if (page_number == 5) {
    	
    }
})
let page_number = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 90, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showRainbow(1, 360)
music.setBuiltInSpeakerEnabled(true)
let matrix = SmartMatrix.create(
DigitalPin.P0,
16,
16,
NeoPixelMode.RGB
)
basic.forever(function () {
    if (page_number == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (page_number == 6) {
        page_number = 0
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
