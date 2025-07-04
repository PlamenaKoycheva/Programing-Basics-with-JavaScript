// Българският състезател по скелетон Марин Бангиев се бори за олимпийска квота. Вие имате честта да напишете програмата, която ще изчисли 
// дали той печели квота.  
// Вашата програма получава контролата в минути, която трябва да бъде достигната или подобрена, за да може Марин да вземе квота. Също така
//  програмата ще получи разстоянието на улея в метри, и времето в секунди, за което той изминава 100 метра. 
// Трябва да се има предвид, че поради наклона на улея, на всеки 120 метра неговото време намаля с 2.5 секунди.
// Вход
// От конзолата се четат 4 реда: 
// Ред 1.	Минути на контролата – цяло число в интервала [0…59]
// Ред 2.	Секунди на контролата – цяло число в интервала [0…59]
// Ред 3.	Дължината на улея в метри – реално число в интервала [0.00…50000]
// Ред 4.	Секунди за изминаване на 100 метра – цяло число в интервала [0…1000]
// Изход
// На конзолата трябва да се отпечата на един или два реда:
// •	Ако времето на Марин е по-малко или равно на контролата:
// o	"Marin Bangiev won an Olympic quota!"
// o	"His time is {времето на Марин в секунди}."
// •	Ако времето на Марин е повече от това на контролата:
// o	 "No, Marin failed! He was {недостигащи секунди} second slower."
// Резултатът трябва да е форматиран до третия знак след десетичния знак.

function skeleton(minsToWin, secToWin, length, secsFor100M) {
    let minsToSecs = minsToWin * 60;
    totalTimeSeconds = minsToSecs + secToWin;
     let timesForDelay = Math.trunc(length / 120);
    let delay = length / 120 * 2.5;
    let marinsTime =(length / 100) * secsFor100M - delay;
    if (marinsTime <= totalTimeSeconds ) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinsTime.toFixed(3)}.`);


    } else {
        let timeNeeded = (marinsTime - totalTimeSeconds)
        console.log(`No, Marin failed! He was ${timeNeeded.toFixed(3)} second slower.`)

    }
    
    
    



}
skeleton(2,
12,
1200,
10)
