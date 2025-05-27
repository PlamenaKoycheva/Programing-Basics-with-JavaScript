function gameNumberWars(input) {
    let index = 0;
    let player1 = input[index++];
    let player2 = input[index++];
    let player1Points = 0;
    let player2Points = 0;

    while (index < input.length) {
        let card1 = input[index++];
        if (card1 === "End of game") break;
        let card2 = input[index++];
        if (card2 === "End of game") break;

        card1 = Number(card1);
        card2 = Number(card2);

        if (card1 > card2) {
            player1Points += card1 - card2;
        } else if (card2 > card1) {
            player2Points += card2 - card1;
        } else {
            console.log("Number wars!");
            let warCard1 = Number(input[index++]);
    
            let warCard2 = Number(input[index++]);
            

            if (warCard1 > warCard2) {
                console.log(`${player1} is winner with ${player1Points} points`);
            } else {
                console.log(`${player2} is winner with ${player2Points} points`);
            }
            return;
        }
    }

    console.log(`${player1} has ${player1Points} points`);
    console.log(`${player2} has ${player2Points} points`);
}
gameNumberWars(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"])
    