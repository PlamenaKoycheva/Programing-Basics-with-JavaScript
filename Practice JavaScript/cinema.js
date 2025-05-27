// От кино ви наемат да напишете програма, чрез която да разберете дали на една прожекцията ще се запълни залата и колко пари ще се 
// изкарат от нея. Получавате места в залата и на всеки следващ ред до команда "Movie time!", колко хора влизат в залата. Цената на един 
// билет е 5 лв. Ако текущия брой хора влезли в залата се дели на 3 без остатък, се прави отстъпка 5лв от общата им сметка. 
// Ако в залата се опитат да влязат повече хора от колкото места са останали, то се счита че местата са изчерпани и програмата трябва да 
// приключи четенето на вход.
// Вход
// От конзолата се четат:
// •	На първия ред - капацитет на залата - цяло число в интервала [50... 150]
// На всеки следващ ред до команда "Movie time!":
// o	Брой хора влизащи в киното - цяло число в интервала [1… 15]
// Изход
// На конзолата първо да се отпечата един ред:
// •	При получена команда "Movie time!":
//  "There are {останали места} seats left in the cinema."
// •	При изчерпване на местата в залата:
// 	"The cinema is full."
// След това да се отпечата:
// 	"Cinema income - {приходи от залата} lv."

function cinema (input) {
    let theatreCapacity = Number(input[0]);
    let index = 1;
    let command = input[index] ;
    index++;
    let totalTicketIncome = 0;
    while (command !== "Movie time!") {
        let peopleEntering = Number(command);
        let ticketPrice = 5 * peopleEntering;
        
        if (peopleEntering % 3 === 0) {
            ticketPrice -= 5;

        }
        

        if (peopleEntering > theatreCapacity) {
            console.log("The cinema is full.");
            break;
            
        }
        totalTicketIncome += ticketPrice
        theatreCapacity -= peopleEntering;
        command = input[index];
        index++;



         if (command === "Movie time!") {
            let seatsLeft = theatreCapacity
    console.log(`There are ${seatsLeft} seats left in the cinema.`);
    break; 
}



    }
    console.log(`Cinema income - ${totalTicketIncome} lv.`)
}
cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"])
    