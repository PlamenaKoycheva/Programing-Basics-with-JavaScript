function cleverLily(age, washerPrice, pricePerToy) {
    let moneySaved = 0;
    let moneyGiven = 10;
    
    for(let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        } else {
            moneySaved += pricePerToy;
        }
    }
    if (washerPrice <= moneySaved) {
        moneyLeft = moneySaved - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        moneyNeeded = washerPrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}
cleverLily(10, 170.00, 6)