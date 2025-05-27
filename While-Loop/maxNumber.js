function maxNumber(array) {
    let index = 0;
    let command = array[index];
    index++
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        let currentnumber = Number(command);
        if( maxNumber < currentnumber) {
            maxNumber = currentnumber;

        }
        command = array[index];
        index++

        
    }
    console.log(maxNumber);
}
maxNumber
(["45",
"-20",
"7",
"99",
"Stop"])
