function multiplicationTable(num2) {
    for(num1 = 1; num1 <= 10; num1++) {
        let result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`)
    }
}
multiplicationTable(5)