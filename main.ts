radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("compass", receivedNumber)
})
radio.setGroup(99)
basic.forever(function () {
	
})
