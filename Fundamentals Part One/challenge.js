const markMass = 95
const markHeight = 1.88
const johnMass = 85
const johnHeight = 1.76

const markBMI = markMass / (markHeight ** 2)
const johnBMI = johnMass / (johnHeight ** 2)

const markHigherBMI = markBMI > johnBMI

if (markHigherBMI === true) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
}