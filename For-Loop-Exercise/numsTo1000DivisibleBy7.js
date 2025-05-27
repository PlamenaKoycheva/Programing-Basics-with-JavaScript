function numsTo1000DivisibleBy7 ()  {
    for(i = 1; i <= 1000; i++) {
        if (i % 10 === 7) {
            console.log(i)
        }
    }
}
numsTo1000DivisibleBy7()