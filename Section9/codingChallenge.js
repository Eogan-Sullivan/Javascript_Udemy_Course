'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(draw, team1, team2);
//6
const printGoals = function (...players) {
  console.log(`${players.length} Goals were scored`);
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};
printGoals(...game.scored);
//7.
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');

//Coding Challenge 2
//1
for (const [i, player] of game.scored.entries()) {
  console.log(`${player} scored goal ${i + 1}`);
}

//2
let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
