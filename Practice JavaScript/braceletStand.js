// Остават 5 дни до рождения ден на брата на Тереза. Тя иска да му купи подарък и решава да си направи малък щанд и да продава плетени 
// гривнички с мъниста, за да събере достатъчно пари.
// Вашата задача е да напишете програма, която да изчислява сумата, която Тереза е успяла да събере и да даде отговор на момичето, дали тя
//  ще може да купи подарък или не. Трябва да се вземат предвид нейните разходи и цената на подаръка.
// Вход
// От конзолата се четат 4 реда:
// •	Първи ред – джобните на Тереза на ден – реално число в интервала [1.00 ...100.00]
// •	Втори ред – парите, които тя печели на ден от продажби – реално число в интервала [1.00...1000.00]
// •	Трети ред – разходите на Тереза за целия период – реално число в интервала [1.00...1000.00]
// •	Четвърти ред – цената на подаръка – реално число в интервала [1.00...10000.00]
// Изход
// На конзолата да се отпечата:
// •	Ако са изработени достатъчно пари за подарък:
// o	"Profit: {всички спестени пари} BGN, the gift has been purchased."
// •	Ако са изработени по-малко нужните пари:
// o	"Insufficient money: {сумата, която не достига} BGN."
// Числата трябва да са форматирани до втория знак след десетичната запетая.

function braceletStand (walletPerDay, incomePerDay, totalExpences, presentPrice) { 
    let totalIncome = incomePerDay * 5;
    let totalWallet = walletPerDay * 5;
    let teresasProfit = (totalIncome + totalWallet) - totalExpences;
    if (teresasProfit >= presentPrice) {
        console.log(`Profit: ${teresasProfit.toFixed(2)} BGN, the gift has been purchased.`);
    } else  if (teresasProfit < presentPrice) {
        let moneyNeeded = presentPrice - teresasProfit;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }


}
braceletStand(2.10,
    17.50,
    20.20,
    148.50
    
    )
