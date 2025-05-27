// Предстои Великден и едно от най-вълнуващите неща е боядисването на яйца. Наличните цветове за боядисване са:
// •	червено (red)
// •	оранжев (orange)
// •	син (blue) 
// •	зелен (green) 
// Напишете програма, която изчислява какъв е броят на яйцата от всеки цвят и от кой цвят яйцата са най - много, като знаете общия им 
// брой и цвета на всяко яйце.
// Вход
// От конзолата се чете 1 ред:
// •	 Броят на боядисаните яйца – цяло число в интервала [1 ... 100]
// За всяко яйце се чете:
// o	Цветът на яйцето – текст с възможности: "red", "orange", "blue", "green"
// Изход
// Да се отпечатат на конзолата 5 реда:
// •	"Red eggs: {брой на червените яйца}"
// •	"Orange eggs: {брой на оранжевите яйца}"
// •	"Blue eggs: {брой на сините яйца}"
// •	"Green eggs: {брой на зелените яйца}"
// •	"Max eggs: {максимален брой на яйцата от цвят} -> {цвят}"

function easterEggs (input) {
    let eggsDyed = Number(input[0]);
    let index = 1;
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;

    for(let i = 0; i < eggsDyed; i++) {
        let eggsColor = input[index] ;
        index++;
        if (eggsColor === "red") {
            redEggs ++
        } else if ( eggsColor === "orange") {
            orangeEggs++;
        } else if (eggsColor === "blue") {
            blueEggs++
        } else if (eggsColor === "green") {
            greenEggs++
        }


    }
    let maxEggs = Math.max(redEggs, orangeEggs, blueEggs, greenEggs);
    let maxColor = "";

    if (maxEggs === redEggs) {
        maxColor = "red";
    } else if (maxEggs === orangeEggs) {
        maxColor = "orange";
    } else if (maxEggs === blueEggs) {
        maxColor = "blue";
    } else if (maxEggs === greenEggs) {
        maxColor = "green";
    }
    console.log(`Red eggs: ${redEggs}`)
    console.log(`Orange eggs: ${orangeEggs}`)
    console.log(`Blue eggs: ${blueEggs}`)
    console.log(`Green eggs: ${greenEggs}`)
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`)




}
easterEggs (["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])
    