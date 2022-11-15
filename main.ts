input.onButtonPressed(Button.A, function () {
    contador = 0
})
let luz = 0
let contador = 0
contador = 0
basic.forever(function () {
    basic.showNumber(contador)
    luz = pins.analogReadPin(AnalogPin.P0)
    if (luz > 700) {
        contador += 1
        basic.pause(200)
    }
})
