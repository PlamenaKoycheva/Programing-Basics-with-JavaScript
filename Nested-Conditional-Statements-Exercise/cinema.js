function cinema (ticketType, rolls, columns) {
    let ticketCount = rolls * columns;
    let income = 0;
    if (ticketType === "Premiere") {
        income = ticketCount * 12;
    } else if (ticketType === "Normal") {
        income = ticketCount * 7.50;

    } else if (ticketType === "Discount") {
        income = ticketCount * 5;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema("Premiere",
10,
12
)