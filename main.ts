game.splash("Today we will calculate the area of a trapezoid")
let base = game.askForNumber("Enter the base in cm")
let base2 = game.askForNumber("Enter the base2 in cm")
let height = game.askForNumber("Enter height in cm")
let area = (base + base2) / 2 * height
game.splash("The area of a trapezoid with length of " + ("" + base) + "cm and length of" + ("" + base2) + "cm and height of" + ("" + height) + "cm is" + ("" + area) + "cm squared")
