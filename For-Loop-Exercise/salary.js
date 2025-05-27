// Шеф на компания забелязва че все повече служители прекарват  време в сайтове, които ги разсейват.  
// За да предотврати това, той въвежда изненадващи проверки на отворените табове на браузъра на служителите си. 
// Според отворения сайт в таба се налагат следните глоби:
// •	"Facebook" -> 150 лв.
// •	"Instagram" -> 100 лв.
// •	"Reddit" -> 50 лв.
// От конзолата се четат два реда:
// •	Брой отворени табове в браузъра n - цяло число в интервала [1...10]
// •	Заплата - число в интервала [500...1500]
// След това n – на брой пъти се чете име на уебсайт – текст
// Изход
// •	Ако по време на проверката заплатата стане по-малка или равна на 0 лева, на конзолата се изписва 
// "You have lost your salary." и програмата приключва. 
// •	В противен случай след проверката на конзолата се изписва остатъкът от заплатата (да се изпише като цяло число).





function salary (arr) {
    let salary = arr[1];
    let numberOftabs = arr[0];
    let ticket = 0
    for(i = 2; i < numberOftabs + 2; i++) {
    let url = arr[i];
    if (url === "Facebook") {
        ticket = 150
        salary -= 150
    } else if (url === "Instagram") {
        ticket = 100
        salary -= 100
    } else if (url === "Reddit") {
        ticket = 50;
        salary -= 50
    } else {
        ticket = 0
    }
    }
    if (salary > 0) {
        let moneyLeft = salary - ticket;
        console.log(Math.trunc(moneyLeft))
    } else {
        console.log("You have lost your salary.")

    }



}
salary([3,
    500,
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])
    
    