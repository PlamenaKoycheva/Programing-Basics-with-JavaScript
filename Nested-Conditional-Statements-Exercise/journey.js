 
//  Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон.  
// Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
//  Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е 
// в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на 
// даден процент от бюджета: 
//  •	При 100лв. или по-малко – някъде в България
//  o	Лято – 30% от бюджета къмпинг
//  o	Зима – 70% от бюджета хотел
//  •	При 1000лв. или по малко – някъде на Балканите
//  o	Лято – 40% от бюджета къмпинг
//  o	Зима – 80% от бюджета хотел
//  •	При повече от 1000лв. – някъде из Европа хотел
//  o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
//  Вход
//  Приемат се 2 аргумента :
//  •	Първи– Бюджет, реално число в интервала [10.00...5000.00].
//  •	Втори–  Един от двата възможни сезона: "summer" или "winter"
//  Изход
//  На конзолата трябва да се отпечатат два реда.
//  •	Първи ред –
//  •	Втори ред – "{Вид почивка} - {Похарчена сума}"
//  o	Почивката може да е между "Camp" и "Hotel"
//  o	Сумата трябва да е закръглена с точност до вторият знак след запетаята.
 
function journey (buget, season) {
    let typeOfExcursion = "";
    let destination = "";
    moneySpend = 0;
    switch (season) {
        case "winter" :
            if ( buget <= 100) {
                destination = "Bulgaria";
                typeOfExcursion = "Hotel";
                moneySpend = 0.7 * buget;
            } else if (buget <= 1000) {
                destination = "Balkans";
                typeOfExcursion = "Hotel";
                moneySpend = 0.8 * buget;
            } else if (buget > 1000) {
                destination = "Europe";
                typeOfExcursion = "Hotel";
                moneySpend = 0.9 * buget;
            }
            break;
            case "summer" :
                if ( buget <= 100) {
                    destination = "Bulgaria";
                    typeOfExcursion = "Camp";
                    moneySpend = 0.3 * buget;
                } else if (buget <= 1000) {
                    destination = "Balkans";
                    typeOfExcursion = "Camp";
                    moneySpend = 0.4 * buget;
                } else if (buget > 1000) {
                    destination = "Europe";
                    typeOfExcursion = "Hotel";
                    moneySpend = 0.9 * buget;
                }
                break;


    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfExcursion} - ${moneySpend.toFixed(2)}`)



}
journey(50,
    "summer"
    )