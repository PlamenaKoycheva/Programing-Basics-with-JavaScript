
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
// От конзолата се четат 6 реда:
// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// Изход
// На конзолата се отпечатва:
// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."

function toyShop(priceForExcursion, puzzelsSum, talkingDollsSum, teddyBearsSum, minionsSum, trucksSum) {
    let moneyWon = puzzelsSum * 2.60 + talkingDollsSum * 3 + teddyBearsSum * 4.10 + minionsSum * 8.20 + trucksSum * 2;
    let toycount = puzzelsSum + talkingDollsSum + teddyBearsSum + minionsSum + trucksSum;
    if (toycount >= 50) {
        moneyWon *= 0.75;   
    }
    moneyWon *= 0.9;

    if (moneyWon >= priceForExcursion) {
        let moneyLeft = moneyWon - priceForExcursion;
        

        console.log ("Yes! " + moneyLeft.toFixed(2) + " lv left.")
    } else {
        let moneyNeeded = priceForExcursion - moneyWon;
        console.log( "Not enough money! " + moneyNeeded.toFixed(2) + " lv needed.")


    }





}
toyShop(40.8,
    20,
    25,
    30,
    50,
    10
    )