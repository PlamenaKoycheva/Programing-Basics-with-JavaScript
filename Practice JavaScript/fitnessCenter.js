// Напишете програма, която да изчислява броя на посетителите в един фитнес център. В началото програмата получава броя на посетителите на 
// фитнеса и за всеки човек - дейността, която извършва във фитнеса. На края програмата трябва да отпечата броят трениращи за всяка една 
// дейност ("Back", "Chest", 'Legs", "Abs") и броят клиенти, закупили продукт ("Protein shake", "Protein bar"). Също така - процентът 
// трениращи (спрямо общия брой посетители) и процентът на клиентите, закупили продукт от фитнеса.
// Вход
// От конзолата се чете число, след това поредица от низове, всяко на отделен ред:
// •	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
// •	За всеки един посетител на отделен ред – дейността във фитнеса – текст ("Back", "Chest", "Legs", "Abs", "Protein shake" или 
// "Protein bar")
// Изход
// Да се отпечатат на конзолата 8 реда, които съдържат следната информация:
// Ред 1 -	"{брой хора трениращи гръб} - back"
// Ред 2 -	"{брой хора трениращи гърди} - chest"
// Ред 3 -	"{брой хора трениращи крака} - legs"
// Ред 4 -	"{брой хора трениращи коремни мускули} - abs"
// Ред 5 -	"{брой хора закупили протеинов шейк} - protein shake"
// Ред 6 -	"{брой хора закупили протеинов блок} - protein bar"
// Ред 7 -	"{процент на хората дошли да тренират}% - work out"
// Ред 8 -	"{процент на хората дошли да купят протеин}% - protein"
// Всички проценти трябва да са форматирани до втората цифра след десетичния знак.






function fitnessCenter (array) {
    let numberOfVisitors = Number(array[0]);
    
    let visitorsBack = 0;
    let visitorsChest = 0;
    let visitorsLegs = 0;
    let visitorsAbs = 0;
    let visitorsProteinShake = 0;
    let visitorsProteinBar = 0;
    for( let i = 1; i <= numberOfVisitors; i++ ) {
        let command = array[i];
    if (command ==="Back") {
        visitorsBack++
    } else if (command === "Abs") {
        visitorsAbs++
    } else if (command === "Chest") {
        visitorsChest++
    } else if (command === "Legs") {
        visitorsLegs++
    } else if (command === "Protein bar") {
        visitorsProteinBar++
    } else if (command === "Protein shake") {
        visitorsProteinShake++
    } 
    
}

    let visitorsTraining = visitorsAbs + visitorsBack + visitorsChest + visitorsLegs;
    let visitorsEating = visitorsProteinBar + visitorsProteinShake;
    let percentVisitorsEating = visitorsEating / numberOfVisitors * 100;
    let percentVisitorsTraining = visitorsTraining / numberOfVisitors * 100;
    console.log(`${visitorsBack} - back`);
    console.log(`${visitorsChest} - chest`)
    console.log(`${visitorsLegs} - legs`)
    console.log(`${visitorsAbs} - abs`)
    console.log(`${visitorsProteinShake} - protein shake`)
    console.log(`${visitorsProteinBar} - protein bar`)
    console.log(`${percentVisitorsTraining.toFixed(2)}% - work out`)
    console.log(`${percentVisitorsEating.toFixed(2)}% - protein`)








 
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
    