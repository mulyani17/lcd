I2C_LCD1602.BacklightOn()
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.shl()
I2C_LCD1602.ShowString("Hello", 0, 0)
basic.pause(5000)
basic.forever(function () {
    I2C_LCD1602.ShowString("T:", 0, 0)
    I2C_LCD1602.ShowString("L:", 0, 1)
    I2C_LCD1602.ShowString("l", 7, 0)
    I2C_LCD1602.ShowString("l", 7, 1)
    I2C_LCD1602.ShowString("Jarak", 10, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
basic.forever(function () {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowNumber(input.temperature(), 3, 0)
    I2C_LCD1602.ShowNumber(sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    ), 10, 1)
    I2C_LCD1602.ShowNumber(input.lightLevel(), 3, 1)
})
