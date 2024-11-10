const numberOfPlayers = parseInt(
  window.prompt("Please enter the number of players:")
);
document.write(`<h2>Number of Players: ${numberOfPlayers}</h2>`);

const players = [];

for (let i = 0; i < numberOfPlayers; i++) {
  const playerName = window.prompt(`Enter name of player ${i + 1}:`);
  const playerScore = Number(window.prompt(`Enter score for player ${i + 1}:`));

  players.push({ name: playerName, score: playerScore });
}

players.sort((a, b) => {
  if (b.score === a.score) {
    return a.name.localeCompare(b.name);
  }
  return b.score - a.score;
});

players.forEach((player) => {
  document.write(`<h3>${player.name}: ${player.score}</h3>`);
});
