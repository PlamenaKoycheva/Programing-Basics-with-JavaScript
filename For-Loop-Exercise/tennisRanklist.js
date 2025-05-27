function tennisRanklist (arr) {
    tournamentCount = Number(arr[0]);
    startingPoints = Number (arr[1]);
    pointsWon = 0;
    tournamentsWon = 0;
    for (i = 2; i < tournamentCount + 2; i++) {
        let result = arr[i]
        if (result === "F") {
            pointsWon += 1200;

        } else if (result === "W") {
            pointsWon += 2000
            tournamentsWon++
        } else if (result === "SF") {
            pointsWon += 720
        }
    }
    console.log(`Final points: ${startingPoints + pointsWon}`);
    console.log(`Average points: ${Math.floor(pointsWon / tournamentCount)}`);
    console.log(`${((tournamentsWon / tournamentCount) * 100).toFixed(2)}%`)

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]
    )
