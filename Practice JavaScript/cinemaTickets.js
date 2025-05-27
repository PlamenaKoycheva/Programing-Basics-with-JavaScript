// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: студентски(student), с
// тандартен(standard) и детски(kid), за всички прожекции. Трябва да изчислите и колко процента от залата е запълнена за всяка една 
// прожекция.
// Вход
// Входът е поредица от цели числа и текст:
// •	На първия ред до получаване на командата "Finish" - име на филма – текст
// •	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// •	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// o	Типа на закупения билет - текст ("student", "standard", "kid")
// Изход
// На конзолата трябва да се печатат следните редове:
// •	След всеки филм да се отпечата, колко процента от кино залата е пълна
// "{името на филма} - {процент запълненост на залата}% full."
// •	При получаване на командата "Finish" да се отпечатат четири реда:
// o	"Total tickets: {общият брой закупени билети за всички филми}"
// o	"{процент на студентските билети}% student tickets."
// o	"{процент на стандартните билети}% standard tickets."
// o	"{процент на детските билети}% kids tickets."



function cinemaTickets(input) {
    let index = 0;
    let command1 = input[index];
    index++;
    let standardTicketSum = 0;
    let studentTicketSum = 0;
    let kidTicketSum = 0;

    while (command1 !== "Finish") {
        let movieTittle = command1;
        let avalableSeats = Number(input[index]);
        index++;
        let command2 = input[index];
        index++;
        let seatsTaken = 0;
        while(command2 !== "End") {
            let ticketType = command2;
            if (ticketType === "standard") {
                standardTicketSum++

            } else if (ticketType === "student") {
                studentTicketSum++
            } else if (ticketType === "kid") {
                kidTicketSum++
            }
            seatsTaken++
            if(seatsTaken === avalableSeats) {
                break;
            }
            command2 = input[index];
        index++
            

        
        }
        
            let hallOccupied = seatsTaken / avalableSeats * 100
            console.log(`${movieTittle} - ${hallOccupied.toFixed(2)}% full.`)
       

        
        command1 = input[index];
        index++

        
    }
    let totalTicketSum = standardTicketSum + studentTicketSum + kidTicketSum;
    console.log(`Total tickets: ${totalTicketSum}`)
    let standardTicketPercent = standardTicketSum / totalTicketSum * 100;
    let studentTicketPercent = studentTicketSum / totalTicketSum * 100;
    let kidTicketPercent = kidTicketSum / totalTicketSum * 100;
    
    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`)
    


    

    

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    