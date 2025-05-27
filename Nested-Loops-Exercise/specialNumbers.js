function specialNumbers (n) {
  let result = "";
  for (let num = 1111; num <= 9999; num++) {
    let numStr = num + '';
    let isSpecial = true;
    for ( let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        if (n % digit !== 0) {
            isSpecial = false;
            break;
        }
    }
    if (isSpecial) {
        result += num + ' '
    }
  }
  console.log(result)


}
specialNumbers(3)