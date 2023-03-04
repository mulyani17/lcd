I2C_LCD1602.backlight_on()
I2C_LCD1602.lcd_init(0)
I2C_LCD1602.shl()
I2C_LCD1602.show_string("Hello", 0, 0)
basic.pause(5000)

def on_forever():
    I2C_LCD1602.show_string("T:", 0, 0)
    I2C_LCD1602.show_string("L:", 0, 1)
    I2C_LCD1602.show_string("l", 7, 0)
    I2C_LCD1602.show_string("l", 7, 1)
    I2C_LCD1602.show_string("Jarak", 10, 0)
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    I2C_LCD1602.clear()
    I2C_LCD1602.show_number(input.temperature(), 3, 0)
    I2C_LCD1602.show_number(sonar.ping(DigitalPin.P15, DigitalPin.P16, PingUnit.CENTIMETERS),
        10,
        1)
    I2C_LCD1602.show_number(input.light_level(), 3, 1)
basic.forever(on_forever2)
