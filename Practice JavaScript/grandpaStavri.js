// Дядо Ставри има казан за ракия и всеки ден вари от любимата си напитка. Ако вари N дни и всеки ден получава различно количество ракия и 
// алкохолен градус, да се намери за всички дни общото количество ракия и градуса на получената смес. 
// Вход
// От конзолата се четат:
// •	На първия ред – N – броят дни  – цяло число в интервала [1...300]
// •	За всеки един ден на отделен ред:
// 	количество на ракията – реално число в интервала [1.00...500.00]
// 	градус на получената напитка - реално число в интервала [10.00...99.00]
// Изход
// Да се отпечатат на конзолата 3 реда:
// •	Първи ред: "Liter: {общо литрите}"
// •	Втори ред: "Degrees: {градусите на общата смес}"
// •	Трети ред – да се отпечатва един от следните редове:
// 	"Not good, you should baking!" - ако градусът е по-малък от 38
// 	"Super!" - ако градусът е от 38 до 42
// 	"Dilution with distilled water!" - aко градусът е по-голям от 42
// Литрите и градусите да бъдат форматирани до втория знак след десетичната запетая.


function grandpaStavri(input) {
    let days = Number(input[0]);
    let totalRakia = 0;
    let totalDegrees = 0;

    let index = 1;
    for (let i = 0; i < days; i++) {
        let rakiaBrew = Number(input[index]);
        let rakiaDegree = Number(input[index + 1]);
        index += 2;

        totalRakia += rakiaBrew;
        totalDegrees += rakiaBrew * rakiaDegree; 
    }

    let avgDegree = totalDegrees / totalRakia;

    console.log(`Liter: ${totalRakia.toFixed(2)}`);
    console.log(`Degrees: ${avgDegree.toFixed(2)}`);

    if (avgDegree < 38) {
        console.log("Not good, you should baking!");
    } else if (avgDegree <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}
grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
    
