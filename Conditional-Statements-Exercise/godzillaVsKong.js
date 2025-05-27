// Известно е, че:
// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
// Вход
// Функцията получава 3 аргумента:
// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.


function godzillaVsKong (filmBuget, numberOfExtras, singleOutfitPrice) {
    let decor = filmBuget * 0.1;
    let totalCostumePrice = numberOfExtras * singleOutfitPrice;
    if (numberOfExtras > 150) {
        totalCostumePrice *= 0.9;
        
    }
    let moneySpend = decor + totalCostumePrice ;
    if (moneySpend > filmBuget) {
        let moneyNeeded = moneySpend - filmBuget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else if  (moneySpend <= filmBuget) {
        let moneyLeft = filmBuget - moneySpend;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    }

}  
godzillaVsKong(20000,
    120,
    55.5
    )