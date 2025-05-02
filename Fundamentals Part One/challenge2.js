const dolphinRound1 = 97;
const dolphinRound2 = 112;
const dolphinRound3 = 81;

const koalaRound1 = 109;
const koalaRound2 = 95;
const koalaRound3 = 86;

const dolphinAverage = (dolphinRound1 + dolphinRound2 + dolphinRound3) / 3
const koalaAverage = (koalaRound1 + koalaRound2 + koalaRound3) / 3

if (dolphinAverage === koalaAverage && koalaAverage >= 100) {
    console.log("The game is a draw :(");
} else if (dolphinAverage > koalaAverage && dolphinAverage > 100) {
    console.log("Dolphins win the game!")
} else if (koalaAverage > dolphinAverage && koalaAverage > 100) {
    console.log("Koalas win the game!")
} else {
    console.log("No one wins the trophy this year.")
}