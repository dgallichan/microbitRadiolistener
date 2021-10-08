radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    led.toggle(0, 0)
    serial.writeString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    led.toggle(3, 3)
    serial.writeValue(name, value)
})
radio.setGroup(99)
basic.forever(function () {
	
})
