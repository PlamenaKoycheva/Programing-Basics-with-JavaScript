// За великденските празници, магазин започва да продава три вида великденска украса – кошнички за яйца (basket), великденски венци  
// (wreath) и шоколадови зайци (chocolate bunny). Вашата задача е да напишете програма, която да изчислява каква сметка трябва да плати 
// всеки един клиент на магазина, като се има в предвид, че всеки клиент закупил четен брой продукти, ще получи 20% отстъпка от крайната
//  цена. След като всички клиенти приключат с покупките, трябва да се отпечата средно по колко пари е похарчил всеки човек.
// Цените на продуктите са:
// •	кошничка за яйца (basket) – 1.50 лв.
// •	великденски венец (wreath) – 3.80 лв.
// •	шоколадов заек (chocolate bunny) – 7 лв.
// Вход
// От конзолата първоначално се чете един ред:
// •	Брои на клиентите в магазина – цяло число [1… 100]
// •	След това за всеки един клиент на нов ред до получаване на командата "Finish" се чете:
// o	Покупката която клиента е избрал – текст ("basket", "wreath" или "chocolate bunny")
// Изход
// •	При получаване на командата "Finish" да се отпечата един ред:
// o	"You purchased {броя на покупките} items for {крайната цена} leva."
// •	Накрая, след като всички клиенти приключат с покупките, да се отпечата на един ред
// o	"Average bill per client is: {средно аритметично на парите които е похарчил всеки един клиент} leva."
// Всички пари трябва да бъдат форматирани до втората цифра след десетичния знак.
 function easterDecoration (input) {
    let custumers = Number(input[0]);
    let index = 1;
    let totalRevenue = 0;
    for (i = 0; i < custumers; i++) {
        let command = input[index];
        index++;
        let basketCount = 0;
        let wreathCount = 0;
        let chocolateBunnyCount = 0;
        while (command !== "Finish") {
            if (command === "basket") {
                basketCount++
            } else if (command === "wreath") {
                wreathCount++
            } else if (command === "chocolate bunny") {
                chocolateBunnyCount++
            }
            command = input[index];
            index++
        }
        let priceForbasket = basketCount * 1.5;
        let priceForWreath = wreathCount * 3.8;
        let priceForChocBunny = chocolateBunnyCount * 7;
        let totalPurchase = priceForbasket + priceForWreath + priceForChocBunny;
        let stuffCount = basketCount + wreathCount + chocolateBunnyCount;
        if (stuffCount % 2 === 0) {
            totalPurchase *= 0.8;

            
        }
        console.log(`You purchased ${stuffCount} items for ${totalPurchase.toFixed(2)} leva.`);
        totalRevenue += totalPurchase
    }
    let avgBill = totalRevenue / custumers
    console.log(`Average bill per client is: ${avgBill.toFixed(2)} leva.`)


 }
 easterDecoration (["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])
    