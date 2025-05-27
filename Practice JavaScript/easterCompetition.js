// С наближаването на Великден, пекарна организира конкурс за направата на най-хубав козунак. Напишете програма, която да намира сладкаря 
// с най-висок резултат. В началото на конкурса се въвежда броя на козунаците, които ще бъдат дегустирани от посетителите на пекарната,
//  като за всеки козунак различен брой посетители, ще дадат оценка от 1 до 10.
// Вход
// Първоначално от конзолата се прочита броя на козунаците – цяло число в интервала [1… 100]
// След това за всеки козунак се прочита:
// •	Името на пекаря, който е направил козунака – текст
// •	До получаване на командата "Stop" се прочита 
// o	оценка за козунак от един човек  – цяло число в интервала [1... 10]
// Изход
// След получаване на командата "Stop" се печата един ред:
// •	"{името на пекаря} has {общият брой получени точки} points."
// Ако след командата "Stop", пекарят е с най-много точки до момента, да се отпечата допълнителен ред:
// •	"{името на пекаря} is the new number 1!"
// След дегустация на всички козунаци, да се отпечата един ред:
// •	"{името на пекаря с най-много точки} won competition with {точките на пекаря} points!"


function easterCompetition(input) {
    let panetoneCount = Number(input[0]);
    let index = 1;
    let bestBaker = "";
    let bestPoints = 0;
    for (let i = 0; i < panetoneCount; i++) {
        let bakerName = input[index];
        index++;
        let command = input[index];
        index++;
        let pointsTotal = 0;
        while (command !== "Stop") {
            let points = Number(command);
            pointsTotal += points;



            command = input[index];
            index++

        }
           console.log (`${bakerName} has ${pointsTotal} points.`);

           if (pointsTotal > bestPoints) {
            bestPoints = pointsTotal;
            bestBaker = bakerName;
            console.log(`${bakerName} is the new number 1!`);
        }
        
    }
    console.log(`${bestBaker} won competition with ${bestPoints} points!`);




}
easterCompetition(["3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])

