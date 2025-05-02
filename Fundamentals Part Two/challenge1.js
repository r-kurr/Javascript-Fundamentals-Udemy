const dolphins1 = 44;
const dolphins2 = 23;
const dolphins3 = 71;

const dolphins4 = 85;
const dolphins5 = 54;
const dolphins6 = 41;

const koalas1 = 65;
const koalas2 = 54;
const koalas3 = 49;

const koalas4 = 23;
const koalas5 = 34;
const koalas6 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvg1 = calcAverage(dolphins1, dolphins2, dolphins3);
const koalasAvg1 = calcAverage(koalas1, koalas2, koalas3);

const dolphinsAvg2 = calcAverage(dolphins4, dolphins5, dolphins6);
const koalasAvg2 = calcAverage(koalas4, koalas5, koalas6);

function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= koalasAvg * 2) {
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
    } else if (koalasAvg >= dolphinsAvg * 2) {
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    } else {
        console.log("No winner this time :(");
    }
}

checkWinner(dolphinsAvg1, koalasAvg1);
checkWinner(dolphinsAvg2, koalasAvg2);
