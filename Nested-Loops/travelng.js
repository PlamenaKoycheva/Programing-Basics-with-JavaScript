function traveling(array) {
    let index = 0;
    let isTraveling = true; // Булева променлива, която контролира цикъла

    while (isTraveling) {
        let destination = array[index];

        if (destination === "End") {
            isTraveling = false; // Спираме програмата, ако достигнем "End"
            break;
        }

        index++;
        let budget = Number(array[index]);
        index++;

        let moneySaved = 0;

        while (moneySaved < budget) {
            let currentAmount = Number(array[index]);
            moneySaved += currentAmount;
            index++;

            // Ако достигнем края на масива, спираме програмата
            if (array[index] === undefined) {
                isTraveling = false;
                break;
            }
        }

        console.log(`Going to ${destination}!`);
    }
}

traveling([
    "Greece", "1000", "200", "200", "300", "100", "150", "240",
    "Spain", "1200", "300", "500", "193", "423",
    "End"
]);