
// Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 
// 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се 
// прибере преди да постигне целта си. Напишете функция, която чете от масив по колко 
// стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се
//  изписва "Goal reached! Good job!" и колко стъпки повече е извървяла 
// "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе 
// стъпките, които е извървяла докато се прибира. След което, ако не е успяла да 
// постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} 
// more steps to reach goal."

function walking(array) {
    let totalStepsCount = 0;

    let index = 0;
    let command = array[index];
    index++

    while (command !== "Going home" ) {
         let currentSteps = Number(command)
         totalStepsCount += currentSteps;
        
            if (totalStepsCount >= 10000) {
                console.log("Goal reached! Good job!");
                console.log(`${totalStepsCount - 10000} steps over the goal!`); break;
            }
         
         
    
    command = array[index];
    index++;
}
    if (command === "Going home") {
        let stepsGoingHome = Number(array[index]);
        totalStepsCount += stepsGoingHome
        if (totalStepsCount >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalStepsCount - 10000} steps over the goal!`)
        } else {
            console.log(`${10000 - totalStepsCount} more steps to reach goal.`)
        }
    }

}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])
    
