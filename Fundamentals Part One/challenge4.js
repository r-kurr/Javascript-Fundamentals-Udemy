const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip}, and 
the total value was ${tip + bill}`);