
// По време на седмицата на Оскарите, градското кино пуска прожекции на някои от филмите, които са номинирани в категорията за "Най-добър 
// филм". В таблицата са показани кои са филмите и каква е цената за прожекция спрямо залата, в която се прожектира филмът. 
// Филм	                normal	     luxury	    ultra luxury
// A Star Is Born	    7.50 лв.	10.50 лв.	13.50 лв.
// Bohemian Rhapsody	7.35 лв.	9.45 лв.	12.75 лв.
// Green Book	         8.15 лв.	10.25 лв.	13.25 лв.
// The Favourite	     8.75 лв.	11.55 лв.	13.95 лв.
// Напишете програма, която изчислява какъв е приходът от даден филм, като знаете в какъв тип зала се прожектира и колко човека са си 
// купили билет за прожекцията.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред – име на филм – текст ("A Star Is Born", "Bohemian Rhapsody","Green Book" или "The Favourite")
// •	Втори ред– вид на залата – текст ("normal", "luxury" или "ultra luxury")
// •	Трети ред – брой на закупените билети – цяло число в интервала [1…100]
// Изход
// На конзолата трябва да се отпечата един ред:
// "{име на филма} -> {приходи от прожекцията на филма} lv."
// Приходите да бъдат закръглени до втория знак след десетичната запетая.

function oscarsWeekInCinema (movie, ticketType, ticketsBought) {
    let earnings = 0;
    switch(movie) {
        case "A Star Is Born" :
            if (ticketType === "normal") {
                earnings = 7.50 * ticketsBought;

            } else if(ticketType === "luxury") {
                earnings = 10.50 * ticketsBought
            } else if (ticketType === "ultra luxury") {
                earnings = 13.50 * ticketsBought;
                
            }break;
            case "Bohemian Rhapsody" :
                if (ticketType === "normal") {
                    earnings = 7.35 * ticketsBought;
    
                } else if(ticketType === "luxury") {
                    earnings = 9.45 * ticketsBought
                } else if (ticketType === "ultra luxury") {
                    earnings = 12.75 * ticketsBought;
                    
                }break;
                case "Green Book" :
                    if (ticketType === "normal") {
                        earnings = 8.15 * ticketsBought;
        
                    } else if(ticketType === "luxury") {
                        earnings = 10.25 * ticketsBought
                    } else if (ticketType === "ultra luxury") {
                        earnings = 13.25 * ticketsBought;
                        
                    }break;
                    case "The Favourite" :
                        if (ticketType === "normal") {
                            earnings = 8.75 * ticketsBought;
            
                        } else if(ticketType === "luxury") {
                            earnings = 11.55 * ticketsBought
                        } else if (ticketType === "ultra luxury") {
                            earnings = 13.95 * ticketsBought;
                           
                        }break;

    }
    console.log(`${movie} -> ${earnings.toFixed(2)} lv.`)



} 
oscarsWeekInCinema(`A Star Is Born`,
    `luxury`,
    42
    )