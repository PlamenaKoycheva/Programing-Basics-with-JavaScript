function cinemaTickets(array) {
    let index = 0;
    let command = array[index];
    index++

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    while (command !== "Finish") {
        let movieTittle = command
        let avalableSeats = Number(array[index]);
        index++;
        let seatsTaken = 0;
        let command1 = array[index];
        index++
        while (command1 !== "End") {

            let ticketType = command1;
            if (ticketType === 'student') {
                studentTicket++
            } else if (ticketType === 'standard') {
                standardTicket++
            } else if (ticketType === 'kid') {
                kidTicket++
            }
            seatsTaken++
            if (seatsTaken === avalableSeats) {
                break;
            }
            command1 = array[index];
            index++

        }
        let fieldSeasPercent = seatsTaken / avalableSeats * 100
        console.log(`${movieTittle} - ${fieldSeasPercent.toFixed(2)}% full.`)

        command = array[index];
        index++
    }
    let totalTicketCount = standardTicket + studentTicket + kidTicket
    console.log(`Total tickets: ${totalTicketCount}`);
    let percentStudenTicket = studentTicket / totalTicketCount * 100;
    let percentStandardTicket = standardTicket / totalTicketCount * 100;
    let percentkidTicket = kidTicket / totalTicketCount * 100;
    console.log(`${percentStudenTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentkidTicket.toFixed(2)}% kids tickets.`);




}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
