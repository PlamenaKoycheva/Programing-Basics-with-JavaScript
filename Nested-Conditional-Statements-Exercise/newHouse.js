
// Да се отпечата на конзолата на един ред:
// •	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// •	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
// Сумата да бъде форматирана до втория знак след десетичната запетая.

function newHouse(flowerType, flowerCount, buget) {
    let price = 0;
    switch (flowerType) {
        case "Roses" :
            price = flowerCount * 5;
            break;
        case "Dahlias" :
            price = flowerCount * 3.80;
            break;
        case "Tulips" :
            price = flowerCount * 2.80;
            break;
        case "Narcissus" :
            price = flowerCount * 3;
            break;
        case "Gladiolus" :
            price = flowerCount * 2.50
            break;

    } 
    if (flowerType === "Roses" && flowerCount > 80) {
        price *= 0.9; 
    } else if (flowerType === "Dahlias" && flowerCount > 90) {
        price *= 0.85;
    } else if (flowerType === "Tulips" && flowerCount > 80) {
        price *= 0.85;
    } else if (flowerType === "Narcissus" && flowerCount < 120) {
        price *= 1.15;
    } else if (flowerType === "Gladiolus" && flowerCount < 80) {
        price *= 1.20;
    }

    if (buget >= price) {
        let moneyLeft = buget - price;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = price - buget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }

}
newHouse("Roses",
55,
250
)