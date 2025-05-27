// Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка. 
// Вход
// От конзолата се четат 3 реда:
// 1.	Име на сериал – текст
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
// Изход
// На конзолата да се изпише един ред:
// •	Ако времето е достатъчно да изгледате епизода: 
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// •	Ако времето не Ви е достатъчно:
// "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
// Времето в двете изходни съобщения да се закръгли до най-близкото цяло число нагоре.

function lunchBreak (movieName, movieDuration, timeForBreak) {
    let timeForLunch = (1 / 8) * timeForBreak;
    let timeForRest = (1 / 4) * timeForBreak;
    
    timeForMovie = timeForBreak - timeForLunch - timeForRest
    
    if (timeForMovie >= movieDuration ) {
        timeLeft = timeForMovie - movieDuration
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft)} minutes free time.`)

    }else {
        timeNeeded = movieDuration - timeForMovie;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }


}
lunchBreak("Teen Wolf",
48,
60


)