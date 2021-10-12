radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(1, 4)
    serial.writeNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    led.toggle(4, 4)
    serial.writeString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    led.toggle(4, 1)
    serial.writeValue(name, value)
})
radio.setGroup(99)
basic.showLeds(`
    # . . . .
    # . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
