function basketballTournament(array) {
    let index = 0;
    let totalGames = 0;
    let totalWins = 0;
    let totalLosses = 0;

    while (true) {
        let tournamentName = array[index];

        if (tournamentName === "End of tournaments") {
            break;
        }

        index++;
        let gamesPlayed = Number(array[index]); // Брой мачове в турнира
        index++;

        for (let game = 1; game <= gamesPlayed; game++) {
            let pointsMadeTeam1 = Number(array[index]); // Точки на отбора на Деси
            index++;
            let pointsMadeTeam2 = Number(array[index]); // Точки на противниковия отбор
            index++;

            totalGames++; // Общ брой изиграни мачове

            if (pointsMadeTeam1 > pointsMadeTeam2) {
                totalWins++;
                console.log(`Game ${game} of tournament ${tournamentName}: win with ${pointsMadeTeam1 - pointsMadeTeam2} points.`);
            } else {
                totalLosses++;
                console.log(`Game ${game} of tournament ${tournamentName}: lost with ${pointsMadeTeam2 - pointsMadeTeam1} points.`);
            }
        }
    }

    // Изчисляване на процентите
    let winPercentage = (totalWins / totalGames) * 100;
    let lossPercentage = (totalLosses / totalGames) * 100;

    console.log(`${winPercentage.toFixed(2)}% matches win`);
    console.log(`${lossPercentage.toFixed(2)}% matches lost`);
}

// Тест с дадения вход
basketballTournament([
    "Dunkers",
    "2",
    "75", "65",
    "56", "73",
    "Fire Girls",
    "3",
    "67", "34",
    "83", "98",
    "66", "45",
    "End of tournaments"
]);
    