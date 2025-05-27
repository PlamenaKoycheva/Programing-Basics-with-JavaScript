// Времето се затопля и клубовете пускат обещаващи промоции. Напише програма, която да изчислява приходите на един клуб за вечерта и 
// дали е достигната желаната печалба, като знаете следните условия: цената на един коктейл е дължината неговото име. Ако цената на една 
// поръчка е нечетно число, има 25% отстъпка от цената на поръчката. 
// Вход
// От конзолата се четат:
// •	На първия ред – желаната печалба на клуба - реално число в интервала [1.00... 15000.00]
// Поредица от два реда до получаване на командата "Party!" или до достигане на желаната печалба:
// o	Име на коктейла – текст
// o	Брой на коктейлите за поръчката – цяло число в интервала [1… 50]
// Изход
// На конзолата първо да се отпечата един ред:
// •	При получена команда "Party!":
//  "We need {недостигаща сума} leva more."
// •	При достигане на желаната печалба:
// 	"Target acquired."
// След това да се отпечата:
// 	"Club income - {приходи от клуба} leva."
// Парите да бъдат форматирани до втората цифра след десетичния знак.


function club(input) {
    let wantedIncome = input[0];
    let index = 1;
    let command = input[index];
    index++;
    let totalIncome = 0;
    
    while (command !== "Party!") {
        let cocktailName = command ;
        let cocktailsOrdered = Number(input[index]);
        index++;
        let pricePerCocktail = Number(cocktailName.length);
        let totalPrice = cocktailsOrdered * pricePerCocktail;

        if (totalPrice % 2 !== 0) {
            totalPrice *= 0.75
        }
        totalIncome += totalPrice

        if (totalIncome >= wantedIncome) {
            console.log("Target acquired.");
            console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
            break;
        }
        command = input[index];
        index++

    }
    if (command === "Party!") {
        let moneyNeeded = wantedIncome - totalIncome
        console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
        console.log(`Club income - ${totalIncome.toFixed(2)} leva.`)
    }


}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])
    