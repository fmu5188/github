let Reading = 0
basic.forever(function () {
    Reading = input.lightLevel()
    led.plotBarGraph(
    Reading,
    255
    )
})
