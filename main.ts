input.onButtonPressed(Button.A, function () {
    if (page_number > 0) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    page_number = 1
})
input.onButtonPressed(Button.B, function () {
    if (page_number == 1) {
    	
    }
    if (page_number == 2) {
    	
    }
    if (page_number == 3) {
    	
    }
    if (page_number == 4) {
    	
    }
    if (page_number == 5) {
    	
    }
    if (page_number == 6) {
    	
    }
})
let page_number = 0
let strip = neopixel.create(DigitalPin.P0, 90, NeoPixelMode.RGB_RGB)
strip.setBrightness(30)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (page_number > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (page_number == 7) {
        page_number = 1
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
    if (page_number == 6) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            # . . . #
            . # # # .
            `)
    }
})
