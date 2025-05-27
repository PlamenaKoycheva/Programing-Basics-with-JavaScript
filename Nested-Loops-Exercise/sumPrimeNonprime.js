function sumPrimeNonprime (array) {
    let primeSum = 0;
    let nonprimeSum = 0;
    let index = 0;
    let command = array[index];
    index++;
    while(command !== 'stop') {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = array[index];
            index++;

            continue;
        }
        let isPrime = true;
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false 
                break;
            } 
        }
       
        if (isPrime) {
            primeSum += num
        } else {
            nonprimeSum += num
        }
        command = array[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonprimeSum}`)


}
sumPrimeNonprime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])
    