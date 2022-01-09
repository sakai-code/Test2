let _4digit = grove.createDisplay(DigitalPin.P12, DigitalPin.P13)
_4digit.bit(1, 0)
basic.forever(function () {
    basic.showString("" + (grove.measureInCentimeters(DigitalPin.P0)))
    basic.pause(2000)
})
