function sumOfTwoNumbers (start, end, magicNumber) {
    let counterCombination = 0;
    let isFinish = false;
    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            counterCombination++
            if (sum === magicNumber) {
                isFinish = true;
                console.log(`Combination N:${counterCombination} (${x} + ${y} = ${magicNumber})`);
                break;
            } 
        }
        if (isFinish) {
            break;
        }
      
    }
    if (!isFinish) {
                
        console.log(`${counterCombination} combinations - neither equals ${magicNumber}`)
        
    }

  
    

}
sumOfTwoNumbers(23,
    24,
    20
    )