
// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват 
// различни върхове.
// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест

function climbingGroups(input) {
    
    let groupCount = Number(input[0]);

    
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let totalClimbers = 0;

    
    for (let i = 1; i <= groupCount; i++) {
        let peopleInGroup = Number(input[i]);
        totalClimbers += peopleInGroup;

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            montBlanc += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
    }

 
    let musalaPercentage = (musala / totalClimbers) * 100;
    let montBlancPercentage = (montBlanc / totalClimbers) * 100;
    let kilimanjaroPercentage = (kilimanjaro / totalClimbers) * 100;
    let k2Percentage = (k2 / totalClimbers) * 100;
    let everestPercentage = (everest / totalClimbers) * 100;

    
    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${montBlancPercentage.toFixed(2)}%`);
    console.log(`${kilimanjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}
climbingGroups(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
    