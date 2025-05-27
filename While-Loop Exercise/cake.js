function cake (array) {
    let width = array[0];
    let length = array[1];
    let cakePieces = width * length;
    let piecesSum = 0;
    let index = 2;
    let command = array[index];
    index++;


    while (command !== "STOP") {
        let piecesTaken = Number(command);
        cakePieces -= piecesTaken;
        if (cakePieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;

        }
        command = array[index];
        index++;



    }
    if (command === "STOP") {
        console.log(`${cakePieces} pieces are left.` )

    }



}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
    
    