

// 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
// Изход
// Отпечатването на конзолата зависи от резултата:
// •	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
// o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
// •	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
// o	"No, he failed! He was {недостигащите секунди} seconds slower."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.









function worldSwimmingRecord(recordInSeconds, distenceInMeters, timeInSeconds) {
    let currentdelay = distenceInMeters / 15;
    let delay = Math.floor(currentdelay) * 12.5;

    let ivansTry = distenceInMeters * timeInSeconds + delay;
    if (ivansTry < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivansTry.toFixed(2)} seconds.`);
    } else  {
        let timeNeeded = ivansTry - recordInSeconds;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);

    }

}
worldSwimmingRecord(55555.67,
    3017,
    5.03)