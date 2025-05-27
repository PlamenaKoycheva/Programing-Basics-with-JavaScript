// Магазин за компютърни игри ви наема за да направите статистика на процента продажби на игрите от последния месец, като изчислите по 
// колко процента от общите продажби са за някоя от игрите.
// Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :
// •	Hearthstone
// •	Fornite
// •	Overwatch
// •	Others
// Вход
// От конзолата се четат:
// •	Брой продадени игри- n - цяло положително число в интервала [1… 100]
// За следващите n реда се чете по един ред:
// o	Име на игра - текст
// Изход
// На конзолата да се изпишат четири реда:
// 	"Hearthstone - {процент продажби на Hearthstone}%"
// 	"Fornite - {процент продажби на Fornite}%"
// 	"Overwatch - {процент продажби на Overwatch}%"
// 	"Others - {процент продажби на всички останали игри}%"
// Резултатът да бъде закръглен до втората цифра след десетичния знак.
 function pcGameShop (input) {
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    let gamesSold = Number(input[0]);
    for (i = 1; i <= gamesSold; i++) {
        let gameName = input[i];
        if (gameName === "Hearthstone") {
            hearthstone++
        } else if (gameName === "Fornite") {
            fornite++
        } else if (gameName === "Overwatch") {
            overwatch++
        } else {
            others++
        }
        
    }
    let hearthstonePercent =  hearthstone / gamesSold * 100;
    let fornitePercent = fornite / gamesSold * 100;
    let overwatchPercent = overwatch / gamesSold * 100;
    let othersPercent = others / gamesSold * 100;
    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`)
    console.log(`Fornite - ${fornitePercent.toFixed(2)}%`)
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`)
    console.log(`Others - ${othersPercent.toFixed(2)}%`)




 }
 pcGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])

