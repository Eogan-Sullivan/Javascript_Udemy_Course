const avgDolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 110) / 3

if (avgDolphins > avgKoalas && avgDolphins >= 100) console.log('Dophins Win!🏆🏆🏆');
else if (avgKoalas > avgDolphins && avgKoalas >= 100) console.log('Koalas Win!🏆🏆🏆');
else if (avgKoalas === avgDolphins && avgKoalas >= 100) console.log('Its a Draw!');
else console.log("Nobody wins");
