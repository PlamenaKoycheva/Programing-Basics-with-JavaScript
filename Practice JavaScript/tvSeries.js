// От телевизионна компания ви наемат да създадете програма, която да изчислява дали за клиентите ще е възможно да си закупят желаните 
// сериали. Разполагате с бюджет и брой сериали, които потребителят ще желае да закупи. Всеки сериал съответно има заглавие и цена.
// Някои от сериалите имат намаление:
// •	Thrones – 50%
// •	Lucifer – 40%	
// •	Protector – 30%
// •	TotalDrama – 20%
// •	Area – 10%
// Вход
// От конзолата се четат:
// •	Бюджет  - реално  число в интервала [10.0… 100.0]
// •	Брой сериали - n - цяло положително число в интервала [1… 10]
// За всеки сериал се четат по два реда:
// o	Име на сериал - текст
// o	Цена за сериал -  реално  число в интервала [1.0… 15.0]
// Изход
// На конзолата да се изпише един ред:
// •	Ако бюджета ви е по-голям или равен на цената на сериалите:
// 	"You bought all the series and left with {останали пари} lv."
// •	Ако бюджета ви е по-малък от цената на сериалите:
// 	"You need {нужни пари} lv. more to buy the series!"
// Резултатът да бъде закръглен до втората цифра след десетичния знак.

function tvSeries(input) {
    let budget = Number(input[0]);
    let tvSeriesCount = Number(input[1]);
    let totalPrice = 0;
    for(i = 0; i < tvSeriesCount; i++) {
        let seriesName = input[2 + i * 2];
        let priceForSeries = Number(input[3 + i * 2]);
        if (seriesName === "Thrones") {
            priceForSeries *= 0.5;
        } else if (seriesName === "Lucifer") {
            priceForSeries *= 0.6
        } else if (seriesName === "Protector") {
            priceForSeries *= 0.7;
        } else if (seriesName === "TotalDrama") {
            priceForSeries *= 0.8;
        } else if (seriesName === "Area") {
            priceForSeries *= 0.9
        }
        totalPrice += priceForSeries


    }
    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`You bought all the series and left with ${moneyLeft.toFixed(2)} lv.`)
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`You need ${moneyNeeded.toFixed(2)} lv. more to buy the series!`)
    }

}
tvSeries(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])
    
    