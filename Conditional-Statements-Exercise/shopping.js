

// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Вход
// Входът се състои от четири реда:
// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]
// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// •	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// •	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.

function shopping(petersBuget, videocardsSum, processorSum, ramSum) {
    let videocardsBought = videocardsSum * 250;
    let procesorBought = processorSum * videocardsBought * 0.35;
    let ramBought = ramSum * videocardsBought * 0.1;
    let moneySpend = videocardsBought + procesorBought + ramBought;
    if (videocardsSum > processorSum) {
         moneySpend *= 0.85;
       
    }
    if (petersBuget >= moneySpend) {
        let moneyLeft = petersBuget - moneySpend;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else {
        let moneyNeeded = moneySpend - petersBuget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}
shopping(900,
    2,
    1,
    3
    )