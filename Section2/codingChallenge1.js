const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const avgKoalas = calcAverage(44, 23, 71);
const avgDolphins = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) console.log(`Dolphins win with a score of ${avgDolphins} VS ${avgKoalas}`);
    else if (avgKoalas >= avgDolphins * 2) console.log(`Koalas win with a score of ${avgKoalas} VS ${avgDolphins}`)
    else console.log(`Nobody wins`)
}

checkWinner(avgDolphins, avgKoalas);
