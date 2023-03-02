input.onGesture(Gesture.Shake, function () {
    let pases = 0
    set_pases += 1
    basic.showNumber(pases)
})
let set_pases = 0
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1023
    )
})
