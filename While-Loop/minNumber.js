function minNumber(array) {
     let index = 0;
     let command = array[index];
     index++;
     let minNumber = Number.MAX_SAFE_INTEGER;
     while (command !== "Stop") {
        let currentNumber = Number(command);
        if (minNumber > currentNumber) {
            minNumber = currentNumber;


        }
        command = array[index];
            index++
        
     }
     console.log(minNumber)


}
minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])
    