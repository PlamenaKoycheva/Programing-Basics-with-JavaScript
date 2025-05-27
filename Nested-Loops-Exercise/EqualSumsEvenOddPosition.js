function equalSumsEvenOddPosition(startNum, endNum) {
    let result = '';
    for (let currentNUm = startNum; currentNUm <= endNum; currentNUm++) {
        let evenDigitSum = 0;
        let oddDigitSum= 0;
        let currentNumStr = currentNUm + '';
        for (let index = 0; index < currentNumStr.length;index++) {
            let digit = Number(currentNumStr[index]);
        
        if (index % 2 === 0) {
            evenDigitSum += digit
            
        } else {
            oddDigitSum += digit
        }
       

        }
        if (evenDigitSum === oddDigitSum) {
            result += currentNumStr + ' ';
            
        }


    } 
    console.log(result)

}
equalSumsEvenOddPosition(100000, 100050)